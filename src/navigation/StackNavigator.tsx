import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '../screens/onboarding/Onboarding';
import {StackNavigatorParamsList} from './navigation.types';
import OnboardingOne from '../screens/onboardingOne/OnboardingOne';
import OnboardingTwo from '../screens/onboardingTwo/OnboardingTwo';

const MainStack = createStackNavigator<StackNavigatorParamsList>();

const StackNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Onboarding" component={Onboarding} />
      <MainStack.Screen name="OnboardingOne" component={OnboardingOne} />
      <MainStack.Screen name="OnboardingTwo" component={OnboardingTwo} />
    </MainStack.Navigator>
  );
};

export default StackNavigator;
