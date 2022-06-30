import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../../Components/MainLayout';
import styles from './styles';

export default function Trade() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text>Trade</Text>
      </View>
    </MainLayout>
  );
}
