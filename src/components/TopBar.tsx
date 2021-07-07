import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { AppBar, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    padding: '5px',
  },
  title: {
    marginRight: 'auto',
  },
});

export default function TopBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bar}>
      <Typography variant="h5" component="h1" className={classes.title}>
        Open Diary
      </Typography>
      <Button color="inherit">Login</Button>
    </AppBar>
  );
}
