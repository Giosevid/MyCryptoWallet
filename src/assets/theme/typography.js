import MIXINS from './mixins';

const typeFonts = {
  ROBOTO_BLACK: 'Roboto-Black',
  ROBOTO_BOLD: 'Roboto-Bold',
  ROBOTO_REGULAR: 'Roboto-Regular',
};

const TYPOGRAPHY = {
  largeTitle: {fontFamily: typeFonts.ROBOTO_BLACK, fontSize: MIXINS.largeTitle},
  h1: {fontFamily: typeFonts.ROBOTO_BLACK, fontSize: MIXINS.h1, lineHeight: 36},
  h2: {fontFamily: typeFonts.ROBOTO_BOLD, fontSize: MIXINS.h2, lineHeight: 30},
  h3: {fontFamily: typeFonts.ROBOTO_BOLD, fontSize: MIXINS.h3, lineHeight: 22},
  h4: {fontFamily: typeFonts.ROBOTO_BOLD, fontSize: MIXINS.h4, lineHeight: 22},
  h5: {fontFamily: typeFonts.ROBOTO_BOLD, fontSize: MIXINS.h5, lineHeight: 22},
  body1: {
    fontFamily: typeFonts.ROBOTO_REGULAR,
    fontSize: MIXINS.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: typeFonts.ROBOTO_REGULAR,
    fontSize: MIXINS.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: typeFonts.ROBOTO_REGULAR,
    fontSize: MIXINS.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: typeFonts.ROBOTO_REGULAR,
    fontSize: MIXINS.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: typeFonts.ROBOTO_REGULAR,
    fontSize: MIXINS.body5,
    lineHeight: 22,
  },
};

export default TYPOGRAPHY;
