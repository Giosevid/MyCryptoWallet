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
    modal: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      backgroundColor: COLORS.transparentBlack,
    },
  });

export default styles;
