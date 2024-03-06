import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';
import GenericTextInput from '../../components/GenericEmailInput';
import EmailIcon from '../../assets/images/emailIcon.svg';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Login'>;
  route: RouteProp<StackNavigatorParamsList, 'Login'>;
}

const Login: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoTitle}>FarmerEats</Text>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <View style={styles.signUpContainer}>
            <Text style={styles.newText}>New here? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <GenericTextInput
              type="email"
              placeholder="Email Address"
              value={''}
              onChangeText={() => {}}
              Icon={EmailIcon}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 36,
    paddingBottom: 54,
  },
  logoTitle: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '400',
    color: '#000',
  },
  welcomeText: {
    color: '#000',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 46,
    marginTop: 90,
  },
  signUpContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  createText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#D5715B',
  },
  newText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000',
    opacity: 0.3,
  },
  formContainer: {
    marginTop: 72,
  },
});
