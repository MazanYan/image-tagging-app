import React from 'react';

import { 
    IconButton, Drawer, 
    Divider, List, 
    useTheme, Theme, 
    makeStyles, createStyles 
} from '@material-ui/core';

import PermMediaIcon from '@material-ui/icons/PermMedia';
import AddIcon from '@material-ui/icons/Add';
import BackupIcon from '@material-ui/icons/Backup';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';

import { Text } from 'react-native';
import SearchByTag from './SearchByTag';
import { getSidebarState } from '../redux/selectors';
import { connect, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/actions';
import * as style from '../assets/style';

interface SidebarElement {
  key: string,
  icon: any,
  text: string,
  onClick: (props: any) => void
}

const sidebarElements: Array<SidebarElement> = [
    {
      key: 'all-img',
      icon: <PermMediaIcon />,
      text: 'All tagged images',
      onClick: (props: any) => props.navigation.navigate("AllTagged")
    },
    {
      key: 'new-img',
      icon: <AddIcon />,
      text: 'Tag new images',
      onClick: (props: any) => props.navigation.navigate("TagImg")
    },
    {
      key: 'back',
      icon: <BackupIcon />,
      text: 'Backups',
      onClick: (props: any) => props.navigation.navigate("Backups")
    },
    {
      key: 'sett',
      icon: <SettingsIcon />,
      text: 'Settings',
      onClick: (props: any) => props.navigation.navigate("Sett")
    },
    {
      key: 'about',
      icon: <InfoIcon />,
      text: 'About',
      onClick: (props: any) => props.navigation.navigate("About")
    },
    {
      key: 'logout',
      icon: <ExitToAppIcon />,
      text: 'Log out',
      onClick: (props: any) => props.navigation.navigate("Logout")
    }
  ]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      zIndex: -1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      backgroundColor: style.backgroundColor,
      width: style.drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }
  }),
);

function Sidebar(props: any) {

    const classes = useStyles();
    const theme = useTheme();
  
    const open = useSelector(store => getSidebarState(store));
  
    return (
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => props.toggleSidebar()}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List style={{ maxHeight: '100%', overflow: 'visible' }}>
          <ListItem style={{ flexDirection: 'column' }}>
            <Text style={{ textAlign: 'right', padding: 0, marginRight: 'auto' }}>Search by tag</Text>
            <SearchByTag style={{ marginTop: 5, backgroundColor: style.backgroudColorLight }} />
          </ListItem>
          <Divider />
          {
            sidebarElements.map(el => 
              <ListItem button key={el.key} onClick={() => {
                  el!.onClick(props);
                  props.toggleSidebar();
                }}>
                <ListItemIcon>
                  {el.icon}
                </ListItemIcon>
                <ListItemText primary={el.text} />
              </ListItem>
            )
          }
        </List>
      </Drawer>
    );
}
  
export default connect(null, { toggleSidebar })(Sidebar);
