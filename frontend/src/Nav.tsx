import { AppBar, FormControlLabel, Switch, Toolbar, Typography } from "@mui/material";
import React from "react";

class Nav extends React.Component<{ currentTheme: boolean, switchTheme: (newTheme: boolean) => void }> {
    render(): React.ReactNode {
        return (
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Maxwell Lanzkron-Tamarazo
                    </Typography>
                    <FormControlLabel sx={{ marginLeft: "auto" }} label="Toggle Theme" control={
                        <Switch color="secondary" checked={this.props.currentTheme} onChange={(_evt, checked) => this.props.switchTheme(checked)} />
                    } />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Nav;