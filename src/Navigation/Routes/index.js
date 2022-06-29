import CryptoDetails from '../../Screens/CriptoDetails';
import Home from '../../Screens/Home/index';
import Market from '../../Screens/Market/index';
import Portfolio from '../../Screens/Portfolio/index';
import Profile from '../../Screens/Profile/index';
import Trade from '../../Screens/Trade/index';
import Transaction from '../../Screens/Transaction';
import BottomTabs from '../BottomTabStackNavigator';

export const Routes = {
  MAIN: 'Main',
  HOME: 'Home',
  MARKET: 'Market',
  PORTFOLIO: 'Portfolio',
  PROFILE: 'Profile',
  TRADE: 'Trade',
  CRYPTO_DETAILS: 'CryptoDetails',
  TRANSACTION: 'Transaction',
};

export const bottomTabsRoutes = [
  {name: Routes.HOME, screen: Home},
  {name: Routes.PORTFOLIO, screen: Portfolio},
  {name: Routes.TRADE, screen: Trade},
  {name: Routes.MARKET, screen: Market},
  {name: Routes.PROFILE, screen: Profile},
];

export const stackTabsRoutes = [
  {name: Routes.MAIN, screen: BottomTabs},
  {name: Routes.CRYPTO_DETAILS, screen: CryptoDetails},
  {name: Routes.TRANSACTION, screen: Transaction},
];
