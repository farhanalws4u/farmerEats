import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// params types for main stack.
export type StackNavigatorParamsList = {
  Onboarding: undefined;
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
};

// 1.) Onboarding types
export type OnboardingScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'Onboarding'
>;
export type OnboardingScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'Onboarding'
>;
