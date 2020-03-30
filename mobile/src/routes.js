import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = false;

  return (
    <Tab.Navigator>
      <Tab.Screen name="SignIn" component={SignIn} />
      <Tab.Screen name="SignUp" component={SignUp} />
    </Tab.Navigator>
  );
}
