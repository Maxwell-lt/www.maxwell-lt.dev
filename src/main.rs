#[macro_use]
extern crate rocket;
use std::{path::PathBuf, borrow::Cow, ffi::OsStr};

use rocket::http::ContentType;
use rust_embed::RustEmbed;

#[derive(RustEmbed)]
#[folder = "frontend/build"]
struct Asset;

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[get("/<file..>")]
fn static_files(mut file: PathBuf) -> Option<(ContentType, Cow<'static, [u8]>)> {
    let filename = file.display().to_string();
    let asset = match Asset::get(&filename) {
        Some(data) => data,
        None => {
            file.push("index.html");
            let index_filename = file.display().to_string();
            Asset::get(&index_filename)?
        }
    };
    let content_type = file
        .extension()
        .and_then(OsStr::to_str)
        .and_then(ContentType::from_extension)
        .unwrap_or(ContentType::Bytes);

    Some((content_type, asset.data))
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/api", routes![index])
        .mount("/", routes![static_files])
}
