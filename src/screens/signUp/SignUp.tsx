import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  StatusBar,
  Text,
} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'SignUp'>;
  route: RouteProp<StackNavigatorParamsList, 'SignUp'>;
}

const SignUp: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View>
          <Text>SignUp</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
