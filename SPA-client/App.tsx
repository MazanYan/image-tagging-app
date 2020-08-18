import React, { FunctionComponent, ComponentClass } from 'react';
import AppBar from './src/components/AppBar';
import MainPage from './src/components/pages/MainPage';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TagImages from './src/components/pages/TagImagePage';
import BackupsPage from './src/components/pages/BackupsPage';
import SettingsPage from './src/components/pages/SettingsPage';
import AboutPage from './src/components/pages/AboutPage';
import LoginLogoutPage from './src/components/pages/LoginLogoutPage';
import AllTagged from './src/components/pages/AllTaggedPage';

const Stack = createStackNavigator();

interface AppPage {
  pageName: string,
  routeName: string,
  component: ComponentClass | FunctionComponent,
  goBack: boolean
}

const appPages: Array<AppPage> = [
  {
    pageName: 'ImageTagger',
    routeName: 'Home',
    component: MainPage,
    goBack: false,
  },
  {
    pageName: 'All tagged images',
    routeName: 'AllTagged',
    component: AllTagged,
    goBack: true,
  },
  {
    pageName: 'Tag images',
    routeName: 'TagImg',
    component: TagImages,
    goBack: true,
  },
  {
    pageName: 'Backups',
    routeName: 'Backups',
    component: BackupsPage,
    goBack: true,
  },
  {
    pageName: 'Settings',
    routeName: 'Sett',
    component: SettingsPage,
    goBack: true,
  },
  {
    pageName: 'About Image Tagger',
    routeName: 'About',
    component: AboutPage,
    goBack: true,
  },
  {
    pageName: 'Log out',
    routeName: 'Logout',
    component: LoginLogoutPage,
    goBack: true,
  },
]

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {
              appPages.map(app => (
                <Stack.Screen
                  name={app.routeName}
                  component={app.component}
                  options={{
                    header: (props: object) => <AppBar {...props} goBack={app.goBack} pageName={app.pageName} position="sticky"/>
                  }}
                />
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
