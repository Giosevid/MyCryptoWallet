import {StyleSheet} from 'react-native';
import COLORS from '../../assets/theme/colors';
import MIXINS from '../../assets/theme/mixins';
import TYPOGRAPHY from '../../assets/theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  title: {
    color: COLORS.white,
    marginBottom: MIXINS.base,
    paddingHorizontal: MIXINS.base,
    ...TYPOGRAPHY.h3,
  },
  card: {
    marginBottom: 8,
    marginHorizontal: 8,
  },
});

export default styles;
