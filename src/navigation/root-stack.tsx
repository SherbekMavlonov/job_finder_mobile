import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './app-stack';
import AuthStack from './auth-stack';

const RootStack = () => {
  const isRegistered = false;
  return (
    <NavigationContainer>
      {isRegistered ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default RootStack;
