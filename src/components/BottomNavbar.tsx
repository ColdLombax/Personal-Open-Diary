import React, { useState } from 'react';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// ICONS
import ChatIcon from '@material-ui/icons/Chat';
import PersonIcon from '@material-ui/icons/Person';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: '0px',
  },
});

function BottomNavbar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      className={classes.root}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Postings" icon={<ChatIcon />} />
      <BottomNavigationAction label="My Posts" icon={<PersonIcon />} />
      <BottomNavigationAction label="Followed" icon={<StarIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavbar;
