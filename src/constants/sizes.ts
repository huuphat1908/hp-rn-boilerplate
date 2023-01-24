import { scale } from '@/libs'

import spacing from './space'

const container = {
  sm: scale(640),
  md: scale(768),
  lg: scale(1024),
  xl: scale(1280),
}
const sizes = {
  ...spacing,
  ...{
    '3xs': scale(224),
    '2xs': scale(256),
    xs: scale(320),
    sm: scale(384),
    md: scale(448),
    lg: scale(512),
    xl: scale(576),
    '2xl': scale(672),
  },
  container,
}
export default sizes
