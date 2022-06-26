import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomTabsRoutes} from '../Routes';
import TabIcon from '../../Components/TabIcon';
import {noHeader} from '../options/index';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={noHeader}
      tabBar={props => <TabIcon {...props} />}>
      {bottomTabsRoutes.map(({name, screen}) => (
        <Tab.Screen key={name} name={name} component={screen} />
      ))}
    </Tab.Navigator>
  );
}
