import {StyleSheet} from 'react-native';
import COLORS from '../../assets/theme/colors';
import TYPOGRAPHY from '../../assets/theme/typography';

const styles = isFocused =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: COLORS.primary,
      borderTopColor: COLORS.transparent,
      height: 140,
    },
    wrapperButton: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isFocused ? COLORS.white : COLORS.secondary,
      ...TYPOGRAPHY.h4,
    },
    stylesTrade: {
      with: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: COLORS.white,
    },
    icon: {
      width: 25,
      height: 25,
      tintColor: isFocused ? COLORS.white : COLORS.secondary,
    },
    tradeStyle: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: COLORS.black,
    },
    closeIcon: {
      width: 10,
      height: 10,
    },
  });

export default styles;
