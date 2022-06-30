import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import COLORS from '../../assets/theme/colors';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.white} />
    </View>
  );
}
