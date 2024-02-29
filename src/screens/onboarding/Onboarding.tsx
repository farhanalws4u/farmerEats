import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Button,
} from 'react-native';
import React from 'react';
import {styles} from './Onboarding.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Onboarding'>;
  route: RouteProp<StackNavigatorParamsList, 'Onboarding'>;
}

const Onboarding: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    </SafeAreaView>
  );
};

export default Onboarding;
