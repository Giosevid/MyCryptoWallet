import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getCoinsMarket, getRates} from '../../services/index';
import {instanceCoinGecko} from '../../config/axios';
import {instanceRipio} from '../../config/ripioAxios';
import styles from './styles';
import Balance from '../../Components/Balance';
import {useSelector, useDispatch} from 'react-redux';
import {setTopCoins} from '../../redux/reducers/transactionReducer';

export default function Home() {
  const {amount, topCoins} = useSelector(state => state.transaction);
  const dispatch = useDispatch();

  const getMarkets = async () => {
    await instanceRipio
      .get(getRates())
      .then(({data}) => data)
      .then(({names}) =>
        instanceCoinGecko.get(getCoinsMarket(Object.keys(names))),
      )
      .then(({data}) => dispatch(setTopCoins(data)));
  };

  useEffect(() => {
    getMarkets();
  }, []);

  const renderHeaderComponent = () => (
    <View style={styles.wrapHeader}>
      <Text style={styles.textHeader}>Top Cryptomonedas</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <View style={styles.items}>
      <View style={styles.wrapperText}>
        <Image source={{uri: item.image}} style={{height: 20, width: 20}} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.name}>${item.current_price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapHeader}>
        <Balance title="Tu Balance" amount={amount} variant={2.3} />
      </View>
      <FlatList
        ListHeaderComponent={renderHeaderComponent}
        data={topCoins}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
