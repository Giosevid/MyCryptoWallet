import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes, {stackTabsRoutes} from '../Routes';
import {noHeader} from '../options';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={noHeader} initialRouteName={Routes.MAIN}>
      {stackTabsRoutes.map(component => (
        <Stack.Screen
          key={component.name}
          name={component.name}
          component={component.screen}
        />
      ))}
    </Stack.Navigator>
  );
}
