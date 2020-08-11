import React from 'react';
import clsx from 'clsx';
import SearchIcon from '@material-ui/icons/Search';

import { Paper, IconButton, InputBase, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '1rem',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      width: '100%'
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

interface SearchByTagProps {
  backgroundColor: string
}

export default function SearchByTag(props: SearchByTagProps) {
  const classes = useStyles();

  const btnClass = makeStyles({
    button: {
      backgroundColor: props.backgroundColor
    }
  })()

  return (
    <Paper component="form" className={clsx(btnClass.button, classes.root)}>
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
