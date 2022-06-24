import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabsRoutes} from '../Routes';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      {bottomTabsRoutes.map(component => (
        <Tab.Screen name={component.name} component={component.screen} />
      ))}
    </Tab.Navigator>
  );
}
