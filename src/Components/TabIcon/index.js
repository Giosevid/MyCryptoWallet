import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {getInfoTabs} from './constants';
import ICONS from '../../assets/theme/icons';
import {useSelector, useDispatch} from 'react-redux';
import {setIsTrade} from '../../redux/reducers/tabReducer';

export default function TabIcon({state, descriptors, navigation}) {
  const {isTrade} = useSelector(state => state.trade);

  const dispatch = useDispatch();

  return (
    <View style={styles().container}>
      {state.routes.map((route, index) => {
        const {
          route: {name},
        } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          if (name === 'Trade') {
            dispatch(setIsTrade(!isTrade));
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const {label, icon} = getInfoTabs[name];

        const renderIcon = activeTrade => {
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
                  source={activeTrade ? ICONS.close : icon}
                  style={[
                    styles(isFocused).icon,
                    activeTrade && styles().closeIcon,
                  ]}
                />
                <Text style={styles(isFocused).text}>{label}</Text>
              </View>
            </TouchableOpacity>
          );
        };

        return !isTrade
          ? renderIcon()
          : name === 'Trade' && renderIcon(isTrade);
      })}
    </View>
  );
}
