import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/Onboarding';
import {StackNavigatorParamsList} from './navigation.types';
import Login from '../screens/login/Login';
import SignUp from '../screens/signUp/SignUp';
import ForgotPassword from '../screens/forgotPassword/ForgotPassword';
import VerifyOtp from '../screens/VerifyOTP/VerifyOtp';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import FarmInfo from '../screens/signUp/FarmInfo';
const MainStack = createStackNavigator<StackNavigatorParamsList>();

const StackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Onboarding" component={Onboarding} />
      <MainStack.Screen name="Login" component={Login} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <MainStack.Screen name="VerifyOtp" component={VerifyOtp} />
      <MainStack.Screen name="ResetPassword" component={ResetPassword} />
      <MainStack.Screen name="FarmInfo" component={FarmInfo} />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
