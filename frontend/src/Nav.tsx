import { AppBar, FormControlLabel, IconButton, Switch, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import React from "react";

class Nav extends React.Component<{ currentTheme: boolean, switchTheme: (newTheme: boolean) => void }> {
    render(): React.ReactNode {
        return (
            <AppBar position="static" color="primary" enableColorOnDark>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Maxwell L-T
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