import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React from "react";
import "./About.css"

class About extends React.Component {
    render(): React.ReactNode {
        return (
            <Grid className="about-grid-container" container direction="row" justifyContent="center" alignItems="stretch" spacing={2} sx={{ marginTop: "1em" }}>
                <Grid item lg={3} xs={10}>
                    <Card className="about-grid-card">
                        <CardHeader title="About Me" />
                        <CardContent>
                            <Typography variant="body2">
                                Hi, I'm Maxwell L-T!
                            </Typography>
                            <Typography variant="body2">
                                I've been programming for years, starting with small excursions into Python and Basic, before moving on to Java.
                            </Typography>
                            <Typography variant="body2">
                                I'm currently building full-stack applications with Spring Boot and Angular.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={3} xs={10}>
                    <Card className="about-grid-card">
                        <CardHeader title="Projects" />
                        <CardContent>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default About;