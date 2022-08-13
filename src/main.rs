#[macro_use]
extern crate rocket;
use rocket::fs::FileServer;

mod env;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    let env = crate::env::parse_args();
    rocket::build()
        .mount("/api", routes![index])
        .mount("/", FileServer::from(env.frontend_files_location))
}
