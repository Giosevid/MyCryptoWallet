import React, {useRef, useEffect} from 'react';
import {View, Animated} from 'react-native';
import {propertyButton} from './constants';
import styles from './styles';
import Button from '../Button';
import MIXINS from '../../assets/theme/mixins';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function MainLayout({children}) {
  const navigation = useNavigation();
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
    outputRange: [MIXINS.height, MIXINS.height - 305],
  });

  return (
    <View style={styles().container}>
      {children}
      {isTrade && <Animated.View style={styles().modal} />}
      <Animated.View style={styles(valueTop).animatedView}>
        {propertyButton.map((property, index) => (
          <Button
            key={index}
            icon={property.icon}
            label={property.label}
            onPress={() => property.onPress(navigation)}
            buttonStyles={property.label === 'Retirar' && styles().tradeStyles}
          />
        ))}
      </Animated.View>
    </View>
  );
}
