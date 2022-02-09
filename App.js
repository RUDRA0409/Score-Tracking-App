import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import LoginScreen from './Login';

const Stack = createStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Login" headerMode = "none">
       <Stack.screen name = "Login" component = {LoginScreen}  />
     </Stack.Navigator>
   </NavigationContainer>
  );
  };
export default App;