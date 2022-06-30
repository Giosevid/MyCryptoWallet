import {StyleSheet} from 'react-native';
import COLORS from '../../assets/theme/colors';
import TYPOGRAPHY from '../../assets/theme/typography';
import MIXINS from '../../assets/theme/mixins';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    ...TYPOGRAPHY.h3,
    marginBottom: MIXINS.h1,
    color: COLORS.white,
  },
});

export default styles;
