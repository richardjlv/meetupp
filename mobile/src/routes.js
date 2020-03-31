import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  const signed = false;

  function App() {
    return (
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="SignIn" headerMode="none">
      {signed ? (
        <Stack.Screen name="App" component={App} />
      ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
    </Stack.Navigator>
  );
}
