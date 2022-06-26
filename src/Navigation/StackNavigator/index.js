import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes, {stackTabsRoutes} from '../Routes';
import {noHeader} from '../options';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={noHeader} initialRouteName={Routes.MAIN}>
      {stackTabsRoutes.map(({name, screen}) => (
        <Stack.Screen key={name} name={name} component={screen} />
      ))}
    </Stack.Navigator>
  );
}
