import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';
import GenericTextInput from '../../components/GenericTextInput';
import EmailIcon from '../../assets/images/emailIcon.svg';
import GenericPasswordInput from '../../components/GenericPasswordInput';
import GenericButton from '../../components/GenericButton';
import GoogleLogo from '../../assets/images/googleLogo.svg';
import AppleLogo from '../../assets/images/appleLogo.svg';
import FacebookLogo from '../../assets/images/facebookLogo.svg';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Login'>;
  route: RouteProp<StackNavigatorParamsList, 'Login'>;
}

const Login: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChangeInput = (key: string, value: string): void => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleLogin = () => {
    console.log('logging in');
  };

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
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={EmailIcon}
            />
            <GenericPasswordInput
              placeholder="Password"
              value={formData.password}
              onChangeText={(text: string) =>
                handleChangeInput('password', text)
              }
              enableForgotBtn
              containerStyles={styles.input}
              navigation={navigation}
            />
            <GenericButton
              containerStyles={styles.loginBtn}
              onPress={handleLogin}
              title={'Login'}
            />
            <Text style={styles.orText}>or login with</Text>
            <View style={styles.socialBtnContainer}>
              <TouchableOpacity style={styles.socialIconWrapper}>
                <GoogleLogo style={styles.socialLogo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIconWrapper}>
                <AppleLogo style={styles.socialLogo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialIconWrapper}>
                <FacebookLogo style={styles.socialLogo} />
              </TouchableOpacity>
            </View>
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
    marginTop: 1,
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
  input: {
    marginTop: 24,
  },
  loginBtn: {
    marginTop: 32,
  },
  orText: {
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 14,
    marginTop: 32,
    textAlign: 'center',
    color: '#261C12',
    opacity: 0.3,
  },
  socialBtnContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIconWrapper: {
    width: 96,
    height: 52,
    borderWidth: 0.1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogo: {
    height: 30,
    width: 30,
  },
});
