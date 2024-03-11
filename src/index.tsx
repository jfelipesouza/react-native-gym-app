import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'

import { LIGHT_THEME } from './services/theme'
import { MainNavigation } from './routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <MainNavigation />
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={LIGHT_THEME.colors.primary}
      />
    </ThemeProvider>
  )
}

export default App
