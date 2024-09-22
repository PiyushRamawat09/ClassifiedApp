import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppProvider, AppConsumer} from './src/Provider/context/AppProvider';
import Stacknav from './src/Provider/Routenavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/Redux/Store';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);
LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppProvider {...this.props}>
            <AppConsumer>
              {funcs => {
                global.props = {...funcs};
                return <Stacknav {...funcs} />;
              }}
            </AppConsumer>
          </AppProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
