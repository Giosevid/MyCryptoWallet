import {StyleSheet} from 'react-native';
import MIXINS from '../../assets/theme/mixins';
import COLORS from '../../assets/theme/colors';

const styles = valueTop =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    animatedView: {
      position: 'absolute',
      left: 0,
      top: valueTop,
      width: '100%',
      padding: MIXINS.padding,
      backgroundColor: COLORS.primary,
    },
    tradeStyles: {
      marginTop: MIXINS.base,
    },
  });

export default styles;
