import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-paper';
import Routes from '../../Navigation/Routes/index';

export default function Home() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.CRYPTO_DETAILS);
  };

  return (
    <View>
      <Text>Home</Text>
      <Button icon="camera" mode="contained" onPress={handlePress}>
        Go to CryptoDetails
      </Button>
    </View>
  );
}
