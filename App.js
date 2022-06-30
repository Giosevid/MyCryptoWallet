import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider, DarkTheme} from 'react-native-paper';
import StackNavigator from './src/Navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  const theme = {
    ...DarkTheme,
  };
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
