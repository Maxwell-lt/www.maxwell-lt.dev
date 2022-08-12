use npm_rs::*;
use std::path::Path;

fn main() {
    let _exit_status = NpmEnv::default()
        .with_node_env(&NodeEnv::Production)
        .set_path(Path::new("./frontend"))
        .init_env()
        .install(None)
        .run("build")
        .exec().unwrap();

    println!("cargo:rerun-if-changes=frontend");
}
