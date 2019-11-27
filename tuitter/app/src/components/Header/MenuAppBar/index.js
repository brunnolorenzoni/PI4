import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LoginLogout from '../LoginLogout'
import SearchUser from '../SearchUser'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Tuitter
          </Typography>
          <SearchUser />
          <LoginLogout />
        </Toolbar>
      </AppBar>
    </div>
  );
}