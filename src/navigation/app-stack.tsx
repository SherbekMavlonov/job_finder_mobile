import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../screens/public/login';

const Tab = createBottomTabNavigator();

const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Test" component={Login} />
      <Tab.Screen name="Test1" component={Login} />
      <Tab.Screen name="Test2" component={Login} />
      <Tab.Screen name="Test3" component={Login} />
    </Tab.Navigator>
  );
};

export default AppStack;
