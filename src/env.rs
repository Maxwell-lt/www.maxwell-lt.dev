use std::path::PathBuf;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
#[structopt(name = "maxwell-lt-dev")]
pub struct Env {
    #[structopt(
        long,
        env = "FRONTEND_FILES_LOCATION",
        parse(from_os_str),
        default_value = "./frontend/build"
    )]
    pub frontend_files_location: PathBuf,
}

pub fn parse_args() -> Env {
    Env::from_args()
}
