import {StyleSheet} from 'react-native';
import COLORS from '../../assets/theme/colors';
import TYPOGRAPHY from '../../assets/theme/typography';
import MIXINS from '../../assets/theme/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    color: COLORS.white,
    ...TYPOGRAPHY.h2,
    marginBottom: MIXINS.base,
  },
  text: {
    textAlign: 'center',
    color: COLORS.white,
    ...TYPOGRAPHY.body2,
    marginTop: MIXINS.base,
  },
});

export default styles;
