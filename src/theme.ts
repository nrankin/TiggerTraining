interface Colors {
  black: string
  lightGrey: string
  white: string
  blue: string
  navy: string
}

export const colors: Colors = {
  black: '#000e1a',
  lightGrey: '#bcbece',
  white: '#fff',
  blue: '#007ce0',
  navy: '#000e1a',
}

interface FontSizes {
  [key: number]: number
}

// https://angrytools.com/android/pixelcalc/
export const fontSizes: FontSizes = {
  // typographic scale because
  // http://spencermortensen.com/articles/typographic-scale/
  // and
  // https://blog.madewithenvy.com/responsive-typographic-scales-in-css-b9f60431d1c4
  //
  '-5': 8,
  '-4': 9.19,
  '-3': 10.556,
  '-2': 12.126,
  '-1': 13.929,
  '0': 16,
  '1': 18.379,
  '2': 21.112,
  '3': 24.251,
  '4': 27.858,
  '5': 32,
  '6': 36.758,
  '7': 42.224,
  '8': 48.503,
  '9': 55.715,
  '10': 64,
  '11': 73.517,
  '12': 84.449,
  '13': 97.006,
  '14': 111.43,
  '15': 128,
  '16': 147.033,
  '17': 168.897,
  '18': 194.012,
  '19': 222.861,
  '20': 256,
  // continue with formula:
  //   multiplier ^ (step / interval)
  //   2 ^ (step / 5)
}

export interface Theme {
  colors: Colors
  fontSizes: FontSizes
}

export const theme = {
  colors,
  fontSizes,
}

export default theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
