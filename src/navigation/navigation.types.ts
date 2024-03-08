import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

// params types for main stack.
export type StackNavigatorParamsList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  VerifyOtp: undefined;
  ResetPassword: undefined;
};

// Onboarding types
export type OnboardingScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'Onboarding'
>;
export type OnboardingScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'Onboarding'
>;

// Login
export type LoginScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'Login'
>;
export type LoginScreenRouteProp = RouteProp<StackNavigatorParamsList, 'Login'>;

// SignUp
export type SignUpScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'SignUp'
>;
export type SignUpScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'SignUp'
>;

// ForgotPassword
export type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'ForgotPassword'
>;
export type ForgotPasswordScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'ForgotPassword'
>;

// VerifyOtp
export type VerifyOtpScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'VerifyOtp'
>;
export type VerifyOtpScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'VerifyOtp'
>;

// ResetPassword
export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  StackNavigatorParamsList,
  'ResetPassword'
>;
export type ResetPasswordScreenRouteProp = RouteProp<
  StackNavigatorParamsList,
  'ResetPassword'
>;
