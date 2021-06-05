import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '@screens/Auth/Welcome';
import FindInstitution from '@screens/Auth/FindInstitution';
import SearchPincode from '@screens/Auth/SearchPincode';
import Login from '@screens/Auth/Login';
import FindSchool from '@screens/Auth/FindSchool';

import DrawerNavigation from './DrawerNavigation';

import Header from '@components/utils/PrimaryHeader';

function Route({}) {
  const Stack = createStackNavigator();

  const AuthStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="FindInstitution" component={FindInstitution} />
        <Stack.Screen name="SearchPincode" component={SearchPincode} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FindSchool" component={FindSchool} />
      </Stack.Navigator>
    );
  };

  const AppStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            header: () => <Header />,
          }}
          name="Drawer"
          component={DrawerNavigation}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Auth">
        <Stack.Screen
          options={{gestureEnabled: false}}
          name="Auth"
          component={AuthStack}
        />
        <Stack.Screen
          options={{gestureEnabled: false}}
          name="App"
          component={AppStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
