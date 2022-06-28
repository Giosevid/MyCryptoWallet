import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';

export default function Button({icon, label, onPress, buttonStyles}) {
  return (
    <TouchableOpacity style={[styles.container, {...buttonStyles}]}>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
      <Text style={[styles.text]}>{label}</Text>
    </TouchableOpacity>
  );
}
