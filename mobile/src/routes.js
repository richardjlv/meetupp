import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Routes() {
  const { signed } = useSelector((state) => state.auth);

  function App() {
    return (
      <Tab.Navigator initialRouteName="Dashboard">
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    );
  }

  return (
    <>
      {signed ? (
        <Tab.Navigator initialRouteName="Dashboard">
          <Tab.Screen name="Dashboard" component={Dashboard} />
        </Tab.Navigator>
      ) : (
          <Stack.Navigator initialRouteName="SignIn" headerMode="none">
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        )}
    </>
  );
}
