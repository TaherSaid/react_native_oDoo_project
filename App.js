import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  Dashboard,
  ShowPartners,
  ShowProduct,
  DeliveryPartner
} from './src/screens'
// import { showpartner } from './src/screens/ShowPartners'

const Stack = createStackNavigator()

const App = () => {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="ShowPartners" component={ShowPartners} />
          <Stack.Screen name="ShowProduct" component={ShowProduct} />
          <Stack.Screen name="DeliveryPartner" component={DeliveryPartner} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
