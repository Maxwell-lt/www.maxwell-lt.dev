{
  description = "Web server backing https://maxwell-lt.dev";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
    crate2nix = {
      url = "github:kolloch/crate2nix";
      flake = false;
    };
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, utils, rust-overlay, crate2nix, ... }:
    let
      name = "maxwell-lt-dev";
    in
    utils.lib.eachDefaultSystem
      (system:
        let
          # Imports
          pkgs = import nixpkgs {
            inherit system;
            overlays = [
              rust-overlay.overlays.default
              (self: super: {
                # Because rust-overlay bundles multiple rust packages into one
                # derivation, specify that mega-bundle here, so that crate2nix
                # will use them automatically.
                rustc = self.rust-bin.stable.latest.default;
                cargo = self.rust-bin.stable.latest.default;
              })
            ];
          };
          inherit (import "${crate2nix}/tools.nix" { inherit pkgs; })
            generatedCargoNix;

          # Create the cargo2nix project
          project = pkgs.callPackage
            (generatedCargoNix {
              inherit name;
              src = ./.;
            })
            {
              # Individual crate overrides go here
              # Example: https://github.com/balsoft/simple-osd-daemons/blob/6f85144934c0c1382c7a4d3a2bbb80106776e270/flake.nix#L28-L50
              defaultCrateOverrides = pkgs.defaultCrateOverrides // {
                # The app crate itself is overriden here. Typically we
                # configure non-Rust dependencies (see below) here.
                ${name} = oldAttrs: {
                  inherit buildInputs nativeBuildInputs;
                } // buildEnvVars;
              };
            };

          # Configuration for the non-Rust dependencies
          buildInputs = with pkgs; [ openssl.dev ];
          nativeBuildInputs = with pkgs; [ 
            rustc
            cargo
            pkgconfig
            nixpkgs-fmt
            rust-analyzer

            nodePackages.create-react-app
            nodejs
            yarn
          ];
          buildEnvVars = {
            PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";
          };

          nodejs = pkgs.nodejs-16_x;
          node2nixOutput = import ./frontend { inherit pkgs nodejs system; };
          nodeDeps = node2nixOutput.nodeDependencies;
          frontend = pkgs.stdenv.mkDerivation {
            name = "frontend";
            src = ./frontend;
            buildInputs = [ nodejs ];
            buildPhase = ''
              runHook preBuild
              
              mkdir -p ./node_modules/.cache
              chmod -R +rwx ./node_modules/.cache
              cp -a ${nodeDeps}/lib/node_modules/. ./node_modules/
              pwd
              ls -la .
              ls -la ./node_modules
              export PATH="${nodeDeps}/bin:$PATH"

              npm run build --loglevel silly

              runHook postBuild
            '';
            installPhase = ''
              runHook preInstall

              cp -r build $out
            '';
          };
        in
        rec {
          packages.${name} = project.rootCrate.build;
          packages.frontend = frontend;
          packages.serve = pkgs.writeShellScriptBin "serve" ''
            export FRONTEND_FILES_LOCATION="${packages.frontend}"
            ${packages.${name}}/bin/${name}
          '';

          # `nix build`
          packages.default = packages.serve;

          apps.${name} = utils.lib.mkApp {
            inherit name;
            drv = packages.${name};
          };

          apps.frontend = utils.lib.mkApp {
            drv = packages.frontend;
          };

          apps.serve = utils.lib.mkApp {
            drv = packages.serve;
          };

          # `nix run`
          apps.default = apps.serve;

          # `nix develop`
          devShell = pkgs.mkShell
            {
              inherit buildInputs nativeBuildInputs;
              RUST_SRC_PATH = "${pkgs.rust.packages.stable.rustPlatform.rustLibSrc}";
            } // buildEnvVars;
        }
      );
}
