#[macro_use] extern crate rocket;
use rocket::fs::{FileServer, relative};

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/api", routes![index])
        .mount("/", FileServer::from(relative!("frontend/build")))
}
