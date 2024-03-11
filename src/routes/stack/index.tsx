import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../../screens/home'
import { ExceciseScreen } from '../../screens/excecise'

const { Navigator, Screen } = createStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="excecise"
        component={ExceciseScreen}
        initialParams={{ trainer: '' }}
      />
    </Navigator>
  )
}
