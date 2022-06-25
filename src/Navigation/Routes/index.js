import TabIcon from '../../Components/TabIcon';
import CryptoDetails from '../../Screens/CriptoDetails';
import Home from '../../Screens/Home/index';
import Market from '../../Screens/Market/index';
import Portfolio from '../../Screens/Portfolio/index';
import Profile from '../../Screens/Profile/index';
import Trade from '../../Screens/Trade/index';
import Transaction from '../../Screens/Transaction';
import BottomTabs from '../BottomTabStackNavigator';

const Routes = {
  MAIN: 'Main',
  HOME: 'home',
  MARKET: 'Market',
  PORTFOLIO: 'Portfolio',
  PROFILE: 'Profile',
  TRADE: 'Trade',
  CRYPTO_DETAILS: 'CryptoDetails',
  TRANSACTION: 'Transaction',
};

export const bottomTabsRoutes = [
  {name: Routes.HOME, screen: Home},
  {name: Routes.MARKET, screen: Market},
  {name: Routes.PORTFOLIO, screen: Portfolio},
  {name: Routes.PROFILE, screen: Profile},
  {name: Routes.TRADE, screen: Trade},
];

export const stackTabsRoutes = [
  {name: Routes.MAIN, screen: BottomTabs},
  {name: Routes.CRYPTO_DETAILS, screen: CryptoDetails},
  {name: Routes.TRANSACTION, screen: Transaction},
];

export default Routes;
