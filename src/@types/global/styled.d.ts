import { LIGHT_THEME } from '../../services/theme'

type LightTheme = typeof LIGHT_THEME

declare module 'styled-components/native' {
  export interface DefaultTheme extends LightTheme {}
}
