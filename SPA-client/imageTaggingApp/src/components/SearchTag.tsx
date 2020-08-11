import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import { Paper, IconButton, InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1rem',
      border: '1px solid rgba(0, 0, 0, 0.2)'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    }
  })
);

export default function SearchByTag() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="#"
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>
  );
}
