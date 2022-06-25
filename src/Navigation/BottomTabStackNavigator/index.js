import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabsRoutes} from '../Routes';
import {tabBarStyles} from './constants';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={tabBarStyles}>
      {bottomTabsRoutes.map(component => (
        <Tab.Screen
          key={component.name}
          name={component.name}
          component={component.screen}
        />
      ))}
    </Tab.Navigator>
  );
}
