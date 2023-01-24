import { extendTheme } from 'native-base'

import { breakpoints, colors, sizes, space } from '@/constants'
import { scale } from '@/libs'

const theme = extendTheme({
  sizes,
  space,
  fontSizes: {
    x: scale(8),
    xxs: scale(10),
    x11: scale(11),
    xs: scale(12),
    xss: scale(13),
    sm: scale(14),
    smm: scale(15),
    md: scale(16),
    mde: scale(17),
    lg: scale(18),
    xl: scale(20),
    '2xl': scale(24),
    '3xl': scale(30),
    '4xl': scale(36),
    '5xl': scale(48),
    '6xl': scale(60),
    '7xl': scale(72),
    '8xl': scale(96),
    '9xl': scale(128),
  },
  colors: {
    custom: { ...colors },
  },
  fontConfig: {
    OpenSans: {
      100: {
        normal: 'OpenSans-Light',
        italic: 'OpenSansLight-Italic',
      },
      200: {
        normal: 'OpenSans-Light',
        italic: 'OpenSansLight-Italic',
      },
      300: {
        normal: 'OpenSans-Light',
        italic: 'OpenSansLight-Italic',
      },
      400: {
        normal: 'OpenSans',
        italic: 'OpenSans-Italic',
      },
      500: {
        normal: 'OpenSans-SemiBold',
      },
      600: {
        normal: 'OpenSans-SemiBold',
        italic: 'OpenSans-SemiboldItalic',
      },
      700: {
        normal: 'OpenSans-Bold',
      },
      800: {
        normal: 'OpenSans-Bold',
        italic: 'OpenSans-BoldItalic',
      },
      900: {
        normal: 'OpenSans-Extrabold',
        italic: 'OpenSans-ExtraboldItalic',
      },
    },
  },
  fonts: {
    OpenSans: 'OpenSans',
  },
  breakpoints,
  components: {
    Text: {
      defaultProps: {
        fontFamily: 'OpenSans',
      },
    },
    Input: {
      defaultProps: {
        fontFamily: 'OpenSans',
        fontSize: 'xss',
        color: colors.black,
        rounded: 10,
      },
    },
    Checkbox: {
      sizes: {
        sm: { _icon: { size: scale(15) } },
        md: { _icon: { size: scale(20) } },
        lg: { _icon: { size: scale(25) } },
      },
    },
    Spinner: {
      sizes: {
        sm: scale(15),
        lg: scale(30),
      },
    },
    Radio: {
      defaultProps: {
        size: 'lg',
      },
    },
  },
})

export default theme
