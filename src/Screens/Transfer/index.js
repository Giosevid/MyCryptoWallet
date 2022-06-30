import React, {useState, memo} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import COLORS from '../../assets/theme/colors';
import Button from '../../Components/Button/index';
import {useDispatch} from 'react-redux';
import {
  setAmount,
  setTransferId,
} from '../../redux/reducers/transactionReducer';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../Navigation/Routes/index';

const valueRandom = Math.random();

const Transfer = () => {
  const navigation = useNavigation();
  const [amount, setTransfer] = useState(0);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setAmount({withdraw: amount}));
    navigation.navigate(Routes.SUCCESS);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Enviar</Text>
        <TextInput
          mode="Outlined"
          label="cantidad"
          keyboardType="numeric"
          placeholder="introducir"
          outlineColor={COLORS.lightGray}
          activeOutlineColor={COLORS.white}
          value={amount}
          onChangeText={text => setTransfer(text)}
        />
        <Text style={styles.text}>{valueRandom}</Text>
      </View>
      <Button label="Aceptar" onPress={onPress} />
    </View>
  );
};

export default memo(Transfer);
