import {StyleSheet} from 'react-native';
import MIXINS from '../../assets/theme/mixins';
import COLORS from '../../assets/theme/colors';
import TYPOGRAPHY from '../../assets/theme/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: MIXINS.radius,
    backgroundColor: COLORS.white,
    width: '90%',
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: MIXINS.base,
    color: COLORS.black,
    ...TYPOGRAPHY.h3,
  },
  withTrade: {
    marginTop: MIXINS.base,
  },
});

export default styles;
