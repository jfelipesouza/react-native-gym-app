import { Dimensions, StatusBar } from 'react-native'
import { RFPercentage as RF } from 'react-native-responsive-fontsize'
import { FontSizeTheme } from '../../@types/theme/fonts'
import { ColorTheme } from '../../@types/theme/colors'

const { width, height } = Dimensions.get('window')
const SBsize = StatusBar.currentHeight

const screen = {
  width,
  height,
  SBsize,
}

const fontsize: FontSizeTheme = {
  xs: RF(1),
  sm: RF(2),
  md: RF(2.5),
  lg: RF(3.2),
}

const padding = {
  sm: RF(1),
  md: RF(2),
  lg: RF(2.5),
}
const colors: ColorTheme = {
  background: '#fff',
  buttonIcon: '#fff',
  buttonText: '#222',
  primary: '#FF7A8A',
  secundary: '#062743',
  text: '#222',
  gray: '#E6E6E2',
}

const LIGHT_THEME = {
  colors,
  fontsize,
  padding,
  screen,
}

export { LIGHT_THEME }
