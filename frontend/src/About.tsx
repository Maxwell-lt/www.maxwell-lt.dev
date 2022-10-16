import { Card, CardContent, CardHeader, Grid, Link, Typography } from "@mui/material";
import React from "react";
import "./About.css"
import { ProjectCard } from "./ProjectCard";

class About extends React.Component {
    render(): React.ReactNode {
        return (
            <Grid className="about-grid-container" container direction="row" justifyContent="center" alignItems="stretch" spacing={2} sx={{ marginTop: "1em" }}>
                <Grid item lg={3} xs={10}>
                    <Typography variant="h2">
                        Biography
                    </Typography>
                    <Card className="about-grid-card" sx={{ mt: 1, mb: 1 }}>
                        <CardHeader title="My Story" />
                        <CardContent>
                            <Typography variant="body1">
                                Hi, I'm Maxwell L-T!
                            </Typography>
                            <Typography variant="body1">
                                My journey into tech began when I attended the first Detroit Maker Faire at ten years old, which sparked my interest in building things.
                                I played around with carpentry and electronics, but was far more fascinated by the microcontroller embedded within my electronics kit than anything else.
                                During a daycamp focusing on game development with Blender, I was shown glimpses of the power of the embedded Python interpreter over the drag-and-drop logic system I used.
                                This lead me to exploring the basics of programming with <Link href="https://justbasic.com/index.html" underline="hover">Just BASIC</Link>, before I jumped into
                                Python so I could fiddle with its game libraries.
                            </Typography>
                            <Typography variant="body1">
                                In 2017, I started working on my first major project, a Minecraft mod written in Java for the Forge modding API.
                                Prior to this project, I had never used Java, and jumping directly into using the poorly-documented Forge API was not easy. I pushed through with much help from a few
                                guides written for similar versions of Minecraft and Forge, as well as source code from the many open-source mods available on GitHub. I published the mod to Curseforge,
                                the primary site for finding Minecraft mods for the desktop version.
                            </Typography>
                            <Typography variant="body1">
                                Between 2017 and 2019, I obtained an Associate's Degree in computer science, during which I finally got exposure to the higher-level concepts in programming such as OOP,
                                data structures, and functional programming.
                            </Typography>
                            <Typography variant="body1">
                                For a few months starting at the end of 2019, I attended the <Link href="https://perscholas.org/courses/full-stack-java-developer/detroit/" underline="hover">
                                    Java Developer course offered by Per Scholas</Link>, and from that course was directly recruited to Ford Motor Company.
                            </Typography>
                            <Typography variant="body1">
                                At Ford, I've been developing and maintaining microservices built with Spring Boot and single-page web apps built with Angular, as well as maintaining CI/CD pipelines
                                built in Jenkins and building new pipelines with Tekton.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} xs={10}>
                    <Typography variant="h2">
                        Projects
                    </Typography>
                    <ProjectCard title="Mob Blocker"
                        links={[
                            { title: "GitHub", href: "https://github.com/Maxwell-lt/MobBlocker" },
                            { title: "CurseForge", href: "https://www.curseforge.com/minecraft/mc-mods/mob-blocker" }
                        ]}>
                        <Typography variant="body1">
                            My first major project (and first codebase written in Java), this is a Minecraft mod which gives players an item that completely protects a small area, letting them start building shelter
                            at night instead of hiding in a hole for safety. This mod is available on the Curseforge distribution platform, where it has been downloaded 40K times.
                        </Typography>
                    </ProjectCard>
                    <ProjectCard title="Title Changer" links={[
                        { title: "GitHub", href: "https://github.com/Maxwell-lt/TitleChanger" },
                        { title: "Curseforge", href: "https://www.curseforge.com/minecraft/mc-mods/title-changer" }
                    ]}>
                        <Typography variant="body1">
                            This Minecraft mod changes the title of the Minecraft window to a configurable value (including several dynamic placeholders giving information on the current world).
                            The intention was for modpack creators to use the mod to add flair to the modpacks, allowing the window title to reflect the name of the modpack instead of simply the
                            Minecraft version. This mod is available on the Curseforge distribution platform, where it has been included in nearly 150 modpacks and downloaded over 900K times.
                        </Typography>
                    </ProjectCard>
                    <ProjectCard title="Social media application" links={[
                        { title: "GitHub", href: "https://github.com/Maxwell-lt/social-media-project" }
                    ]}>
                        <Typography variant="body1">
                            A social media style full-stack project developed over the course of a few weeks, with the twist that users must pay for "Likes" to apply to posts to boost their visibility.
                            This was developed as my final project for
                            the <Link href="https://perscholas.org/courses/full-stack-java-developer/detroit/" underline="hover">Per Scholas Java Developer course</Link> which I attended in 2019-2020.
                            The website is built in Spring Boot, with Thymeleaf for rendering the frontend, and uses Spring JPA to interact with a MySql database.
                        </Typography>
                    </ProjectCard>
                    <ProjectCard title="My customized NixOS installation" links={[
                        { title: "GitHub", href: "https://github.com/Maxwell-lt/machine-configuration" }
                    ]}>
                        <Typography variant="body1">
                            In 2020, I switched from Linux Mint to NixOS, a Linux distribution based on the idea of declarative configuration. Instead of installing applications one-by-one with apt, yum,
                            or emerge, then configuring them by modifying files all over your system with sudoedit, the entire state of your system is described using the Nix language.
                            This has some major benefits such as reproducibility, the ability to check your system state into source control, and rollbacks to previous states. I built my system with
                            by referencing the configurations other NixOS users had made available, and in turn my system configuration is available at the link below.
                        </Typography>
                    </ProjectCard>
                    <ProjectCard title="cursetool-rs" links={[
                        { title: "GitHub", href: "https://github.com/erisia/cursetool-rs"}
                    ]}>
                        <Typography variant="body1">
                            I play on and help administrate a heavily-modded Minecraft server with
                            a <Link href="https://github.com/Erisia/builder" underline="hover">bespoke build system</Link> written in Nix. The configuration files to describe a modpack
                            are impractical to write by hand, so there was a tool to process a more human-friendly representation to construct a configuration
                            which uses mods from Curseforge. However, this existing version of Cursetool no longer functioned due to changes to the Curseforge website blocking webscrapers,
                            and no one had time to update it.
                        </Typography>
                        <Typography variant="body1">
                            Seeing an opportunity for a fun project, I jumped in and started a complete rewrite that would use the Curseforge API instead of scraping the website for info.
                            I implemented the <Link href="" underline="hover">first prototype</Link> with Python, but was annoyed with Python's lack of compile time type-checking, being used to
                            using Java. As I had been reading through the Rust documentation, I decided to write a more polished version as a way to familiarize myself with the language.
                            I was successful in this attempt, and my cursetool-rs implementation has been in use for a while now.
                        </Typography>
                    </ProjectCard>
                </Grid>
                {/* <Grid item lg={3} xs={10}>
                    <Typography variant="h2">
                        Languages and tools
                    </Typography>
                    <Card className="about-grid-card" sx={{ mt: 1, mb: 1 }}>
                        <CardHeader title="Very familiar" />
                    </Card>
                </Grid> */}
            </Grid>
        );
    }
}

export default About;