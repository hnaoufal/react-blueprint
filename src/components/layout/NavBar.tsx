import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Home from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function NavBar() {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/tech-radar">
              <IconButton className={classes.menuButton} aria-label="menu">
                <Home/>
              </IconButton>
            </Link>
            <Link to="/tech-radar/edit">
              <IconButton className={classes.menuButton} aria-label="menu">
                <EditIcon/>
              </IconButton>
            </Link>
            <Typography variant="h6" className={classes.title}>
              Bosch Tech Radar — 2020
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default NavBar;
