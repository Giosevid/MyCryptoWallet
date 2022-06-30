import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../assets/theme/colors';
import Button from '../../Components/Button';
import {Routes} from '../../Navigation/Routes/index';

export default function Success() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(Routes.HOME);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Su envío se realizó con éxito</Text>
      <AwesomeIcon name="check" size={70} color={COLORS.white} />
      <Button label="Continuar" onPress={onPress} />
    </View>
  );
}
