import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import BottomTabs from './src/Navigation/BottomTabStackNavigator';
import {noHeader} from './src/Navigation/options';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={noHeader} initialRouteName="Main">
          <Stack.Screen name="Main" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
