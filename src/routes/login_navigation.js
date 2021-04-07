import React from 'react';
import LoginPage from '../pages/login_page';
import RegisterPage from '../pages/register_page';
import MenuNavigation from './menu_navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
      <Stack.Screen name = "LoginPage" component={LoginPage} />
      <Stack.Screen name = "MenuNavigation" component = {MenuNavigation}/>
      <Stack.Screen name = "RegisterPage" component = {RegisterPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}