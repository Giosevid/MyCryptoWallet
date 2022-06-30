import {StyleSheet} from 'react-native';
import COLORS from '../../assets/theme/colors';
import MIXINS from '../../assets/theme/mixins';
import TYPOGRAPHY from '../../assets/theme/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingHorizontal: MIXINS.padding,
  },
  wrapHeader: {
    paddingHorizontal: MIXINS.padding,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: COLORS.gray,
    paddingBottom: MIXINS.padding,
  },
  wrapHeader: {
    marginBottom: MIXINS.radius,
  },
  textHeader: {
    color: COLORS.white,
    ...TYPOGRAPHY.h3,
    fontSize: 18,
  },
  name: {
    color: COLORS.white,
    ...TYPOGRAPHY.h3,
    marginLeft: 8,
  },
  items: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  wrapperText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
