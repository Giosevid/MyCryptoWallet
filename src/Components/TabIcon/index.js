import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {getInfoTabs} from './constants';

export default function TabIcon({state, descriptors, navigation}) {
  return (
    <View style={styles().container}>
      {state.routes.map((route, index) => {
        const {
          route: {name},
        } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const {label, icon} = getInfoTabs[name];

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}>
            <View
              style={[
                styles().wrapperButton,
                name === 'Trade' && styles().tradeStyle,
              ]}>
              <Image
                resizeMode="contain"
                source={icon}
                style={styles(isFocused).icon}
              />
              <Text style={styles(isFocused).text}>{label}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
