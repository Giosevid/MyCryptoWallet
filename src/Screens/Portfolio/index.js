import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-paper';
import {useSelector} from 'react-redux';
import styles from './styles';

export default function Portfolio() {
  const {arrTransactions} = useSelector(state => state).transaction;

  console.log('arr ====> ', arrTransactions);

  const renderItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Title title={item.direction} subtitle={item.withdraw} />
    </Card>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus Transacciones</Text>
      <FlatList data={arrTransactions} renderItem={renderItem} />
    </View>
  );
}
