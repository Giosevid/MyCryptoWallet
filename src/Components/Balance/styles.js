import {StyleSheet} from 'react-native';
import TYPOGRAPHY from '../../assets/theme/typography';
import COLORS from '../../assets/theme/colors';
import MIXINS from '../../assets/theme/mixins';

const styles = variant =>
  StyleSheet.create({
    container: {
      marginTop: 50,
    },
    title: {
      ...TYPOGRAPHY.h3,
      color: COLORS.lightGray3,
    },
    wrapperFigure: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    amount: {
      ...TYPOGRAPHY.h2,
      color: COLORS.white,
      marginLeft: MIXINS.base,
    },
    type: {
      color: COLORS.lightGray3,
      ...TYPOGRAPHY.h3,
      marginLeft: 3,
    },
    image: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    arrow: {
      width: 10,
      height: 10,
      alignSelf: 'center',
      tintColor: variant > 0 ? COLORS.lightGreen : COLORS.red,
      transform: [{rotate: variant > 0 ? '45deg' : '125deg'}],
    },
    variant: {
      marginLeft: MIXINS.base,
      alignSelf: 'flex-end',
      color: variant ? COLORS.lightGreen : COLORS.red,
      ...TYPOGRAPHY.h5,
    },
    caption: {
      marginLeft: MIXINS.radius,
      alignSelf: 'flex-end',
      color: COLORS.lightGray3,
      ...TYPOGRAPHY.h5,
    },
  });

export default styles;
