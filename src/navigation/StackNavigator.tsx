import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/Onboarding';
import {StackNavigatorParamsList} from './navigation.types';
import Login from '../screens/login/Login';
import SignUp from '../screens/signUp/SignUp';
const MainStack = createStackNavigator<StackNavigatorParamsList>();

const StackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Onboarding" component={Onboarding} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={SignUp} />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
