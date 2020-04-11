import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import navigationRef from '~/services/rootNavigation';
import '~/config/reactotronConfig';
import { store, persistor } from '~/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar barStyle="light-content" backgroundColor="#191920" />
          <Routes />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
