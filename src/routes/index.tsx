import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from './stack'

export const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}
