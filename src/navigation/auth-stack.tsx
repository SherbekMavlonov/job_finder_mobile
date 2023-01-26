import React from 'react';
import {SplashScreen} from '../screens/public/splash-screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/public/login';
import {ScreenNameAuth} from '../constants/navigation';
import {SignUp} from '../screens/public/sign-up';

export type AuthStackParamList = {
  [ScreenNameAuth.INITIAL]: undefined;
  [ScreenNameAuth.LOGIN]: undefined;
  [ScreenNameAuth.SIGNUP]: undefined;
  [ScreenNameAuth.FORGOT_PASSWORD]: undefined;
  [ScreenNameAuth.SUCCESSFULLY]: undefined;
  [ScreenNameAuth.CHECK_EMAIL]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNameAuth.INITIAL}>
      <Stack.Screen name={ScreenNameAuth.INITIAL} component={SplashScreen} />
      <Stack.Screen name={ScreenNameAuth.LOGIN} component={Login} />
      <Stack.Screen name={ScreenNameAuth.SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
