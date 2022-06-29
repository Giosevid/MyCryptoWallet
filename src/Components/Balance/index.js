import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import ICONS from '../../assets/theme/icons';
import formatMoney from '../../utils/formatAmount';

export default function Balance({title, amount, variant}) {
  return (
    <View style={styles().container}>
      <Text style={styles().title}>{title}</Text>
      <View style={styles().wrapperFigure}>
        <Text style={styles().title}>$</Text>
        <Text style={styles().amount}>{formatMoney(amount)}</Text>
        <Text style={styles().type}>USD</Text>
      </View>
      <View style={styles().image}>
        {variant > 0 && (
          <Image source={ICONS.upArrow} style={styles(variant).arrow} />
        )}
        <Text style={styles(variant).variant}>{variant.toFixed(2)}</Text>
        <Text style={styles().caption}>7d change</Text>
      </View>
    </View>
  );
}
