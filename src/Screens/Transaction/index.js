import React, {useState, memo} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';
import COLORS from '../../assets/theme/colors';
import Button from '../../Components/Button/index';
import {useDispatch} from 'react-redux';
import {setTransferId} from '../../redux/reducers/transactionReducer';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../Navigation/Routes/index';

const Transaction = () => {
  const navigation = useNavigation();
  const [idUser, setIdUser] = useState(null);
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setTransferId({direction: idUser}));
    navigation.navigate(Routes.TRANSFER);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Transferir</Text>
        <TextInput
          mode="Outlined"
          label="Email ó Número de teléfono"
          placeholder="introducir"
          outlineColor={COLORS.lightGray}
          activeOutlineColor={COLORS.white}
          value={idUser}
          onChangeText={text => setIdUser(text)}
        />
        <Text style={styles.text}>Transfiere a tus amigos!</Text>
      </View>
      <Button label="Aceptar" onPress={onPress} />
    </View>
  );
};

export default memo(Transaction);
