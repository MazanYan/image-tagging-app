import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, AppBarProps, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { View, StyleSheet } from 'react-native';

export default function Navbar(props: AppBarProps) {

    const appBarStyle = {
        backgroundColor: '#2db668',
        zIndex: 1
    };

    return (
        <AppBar {...props} style={appBarStyle}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h5" noWrap>
                    Image Tagger
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
