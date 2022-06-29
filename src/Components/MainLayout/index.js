import React, {useRef, useEffect} from 'react';
import {View, Animated, Text} from 'react-native';
import {propertyButton} from './constants';
import styles from './styles';
import Button from '../Button/index';
import MIXINS from '../../assets/theme/mixins';
import {useSelector} from 'react-redux';

export default function MainLayout({children}) {
  const {isTrade} = useSelector(state => state.trade);
  const modalAnimationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(modalAnimationValue, {
      toValue: isTrade ? 1 : 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [isTrade]);

  const valueTop = modalAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [MIXINS.height, MIXINS.height - 280],
  });

  return (
    <View style={styles().container}>
      {children}
      <Animated.View style={styles(valueTop).animatedView}>
        {propertyButton.map((property, index) => (
          <Button
            key={index}
            icon={property.icon}
            label={property.label}
            onPress={property.onPress}
            buttonStyles={property.label === 'Retirar' && styles().tradeStyles}
          />
        ))}
      </Animated.View>
    </View>
  );
}
