import React from 'react';
import { 
  AppBar, Toolbar,
  IconButton, Typography, AppBarProps
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { connect } from 'react-redux';
import { toggleSidebar } from '../redux/actions';

import Sidebar from './Sidebar';
import { backgroundColor } from '../assets/style';
import { View } from 'react-native';

interface NavbarProps extends AppBarProps {
    goBack: boolean,
    toggleSidebar: Function,
    pageName: string,
    navigation?: any
}

function Navbar(props: NavbarProps) {

    const appBarStyle = {
        backgroundColor: backgroundColor,
        zIndex: 1
    };

    const menuButton = props.goBack ? (
        <View>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => props.navigation.goBack()}
            >
                <ArrowBackIcon/>
            </IconButton>
        </View>
    ) : (
        <View>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => props.toggleSidebar()}
            >
                <MenuIcon/>
            </IconButton>
        </View>
    );

    return (
      <AppBar {...props} style={appBarStyle}>
          <Toolbar>
              {menuButton}
              <Typography variant="h5" noWrap>
                  {props.pageName}
              </Typography>
          </Toolbar>
          <Sidebar {...props}/>
      </AppBar>
    );
}

export default connect(null, { toggleSidebar })(Navbar);
