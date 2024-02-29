import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {styles} from './OnboardingTwo.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'OnboardingTwo'>;
  route: RouteProp<StackNavigatorParamsList, 'OnboardingTwo'>;
}

const OnboardingTwo: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Onboarding Two</Text>
    </SafeAreaView>
  );
};

export default OnboardingTwo;
