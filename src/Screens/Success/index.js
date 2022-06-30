import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../assets/theme/colors';
import Button from '../../Components/Button';
import {Routes} from '../../Navigation/Routes/index';
import {useDispatch} from 'react-redux';
import {setIsTrade} from '../../redux/reducers/tabReducer';

export default function Success() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsTrade(false));
    navigation.navigate(Routes.PORTFOLIO);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Su envío se realizó con éxito</Text>
      <AwesomeIcon name="check" size={70} color={COLORS.white} />
      <Button label="Continuar" onPress={onPress} />
    </View>
  );
}
