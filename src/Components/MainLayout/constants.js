import ICONS from '../../assets/theme/icons';
import {Routes} from '../../Navigation/Routes/index';

export const propertyButton = [
  {
    label: 'Transferir',
    icon: ICONS.send,
    onPress: navigation =>
      navigation.navigate({
        name: Routes.TRANSACTION,
      }),
  },
  {
    label: 'Retirar',
    icon: ICONS.withdraw,
    onPress: navigation => navigation.navigate(Routes.CRYPTO_DETAILS),
  },
];
