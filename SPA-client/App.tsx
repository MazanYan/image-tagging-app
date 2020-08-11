import React from 'react';
import { View } from 'react-native';
import Navbar from './src/components/AppBar';
import MainPage from './src/components/MainPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    overflow: 'auto'
  },
  appBarSpacer: theme.mixins.toolbar
}));

export default function App() {
  const classes = useStyles();

  return (
    <View>
      <Navbar position="sticky"/>
      <MainPage />
    </View>
  );
}
