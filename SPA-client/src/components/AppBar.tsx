import React, { useEffect, useState } from 'react';
import { 
    AppBar, Toolbar,
    IconButton, Typography,
    makeStyles, Drawer, 
    Divider, List, Theme,
    createStyles, useTheme 
  } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
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
import SearchByTag from './SearchTag';
import { getSidebarState } from '../redux/selectors';
import { connect, useSelector } from 'react-redux';
import { toggleSidebar } from '../redux/actions';

import store from '../redux/store';

const drawerWidth = '90%';
const backgroundColor = '#2db668';
const backgroudColorLight = '#59df93';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawerPaper: {
      backgroundColor: backgroundColor,
      width: drawerWidth,
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
      })
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

const sidebarElements = [
  {
    key: 'all-img',
    icon: <PermMediaIcon />,
    text: 'All tagged images'
  },
  {
    key: 'new-img',
    icon: <AddIcon />,
    text: 'Tag new image'
  },
  {
    key: 'back',
    icon: <BackupIcon />,
    text: 'Backups'
  },
  {
    key: 'sett',
    icon: <SettingsIcon />,
    text: 'Settings'
  },
  {
    key: 'about',
    icon: <InfoIcon />,
    text: 'About'
  },
  {
    key: 'logout',
    icon: <ExitToAppIcon />,
    text: 'Log out'
  }
]

function Sidebar(props: any) {

  const classes = useStyles();
  const theme = useTheme();

  const open = useSelector(store => getSidebarState(store));

  useEffect(() => {
    console.log(props);
    //setOpen(getSidebarState(store));
  });

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
      <List style={{maxHeight: '100%', overflow: 'auto'}}>
        <ListItem>
          <SearchByTag backgroundColor={backgroudColorLight} />
        </ListItem>
        <Divider />
        {
          sidebarElements.map(el => 
            <ListItem button key={el.key}>
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

const mapStateToProps = (state: any) => { openState: getSidebarState(state) };

const SidebarWithState = connect(mapStateToProps, { toggleSidebar })(Sidebar);

function Navbar(props: any) {

    //const [open, setOpen] = useState(false);

    const appBarStyle = {
        backgroundColor: backgroundColor,
        zIndex: 1
    };

    return (
      <AppBar {...props} style={appBarStyle}>
          <Toolbar>
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => {
                    console.log('Sidebar state');
                    console.log(getSidebarState(store));
                    props.toggleSidebar()
                  }}
              >
                  <MenuIcon/>
              </IconButton>
              <Typography variant="h5" noWrap>
                  Image Tagger
              </Typography>
          </Toolbar>
          <SidebarWithState />
      </AppBar>
    );
}

export default connect(null, { toggleSidebar })(Navbar);
