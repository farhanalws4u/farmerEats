import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';
import GenericPasswordInput from '../../components/GenericPasswordInput';
import GenericTextInput from '../../components/GenericTextInput';
import GoogleLogo from '../../assets/images/googleLogo.svg';
import AppleLogo from '../../assets/images/appleLogo.svg';
import FacebookLogo from '../../assets/images/facebookLogo.svg';
import EmailIcon from '../../assets/images/emailIcon.svg';
import PersonIcon from '../../assets/images/personIcon.svg';
import PhoneIcon from '../../assets/images/phoneIcon.svg';
import GenericButton from '../../components/GenericButton';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'SignUp'>;
  route: RouteProp<StackNavigatorParamsList, 'SignUp'>;
}

const SignUp: React.FC<IProps> = ({navigation}) => {
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
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoTitle}>FarmerEats</Text>
          <Text style={styles.stepsText}>Signup 1 of 4</Text>
          <Text style={styles.welcomeText}>Welcome!</Text>
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
          <Text style={styles.orText}>or login with</Text>
          <View style={styles.formContainer}>
            <GenericTextInput
              type="text"
              placeholder="Full Name"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={PersonIcon}
            />
            <GenericTextInput
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={EmailIcon}
              containerStyles={styles.input}
            />
            <GenericTextInput
              type="phone"
              placeholder="Phone Number"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={PhoneIcon}
              containerStyles={styles.input}
            />
            <GenericPasswordInput
              placeholder="Password"
              value={formData.password}
              onChangeText={(text: string) =>
                handleChangeInput('password', text)
              }
              containerStyles={styles.input}
            />
            <GenericPasswordInput
              placeholder="Re-enter Password"
              value={formData.password}
              onChangeText={(text: string) =>
                handleChangeInput('password', text)
              }
              containerStyles={styles.input}
            />
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginBtnText}>Login</Text>
              </TouchableOpacity>
              <GenericButton
                containerStyles={styles.loginBtn}
                onPress={() => navigation.navigate('FarmInfo')}
                title={'Continue'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 36,
    paddingBottom: 54,
  },
  logoTitle: {
    fontSize: 16,
    lineHeight: 23,
    color: '#000',
    marginTop: 1,
    fontFamily: 'BeVietnamProRegular',
  },
  welcomeText: {
    color: '#000',
    fontSize: 32,
    lineHeight: 46,
    marginTop: 4,
    fontFamily: 'BeVietnamProBold',
  },
  socialBtnContainer: {
    marginTop: 40,
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
  formContainer: {
    marginTop: 32,
  },
  input: {
    marginTop: 24,
  },
  loginBtn: {
    width: 226,
  },
  orText: {
    fontSize: 10,
    lineHeight: 14,
    marginTop: 32,
    textAlign: 'center',
    color: '#261C12',
    opacity: 0.3,
    fontFamily: 'BeVietnamProMedium',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 82,
  },
  loginBtnText: {
    textDecorationLine: 'underline',
    color: '#261C12',
    fontFamily: 'BeVietnamProRegular',
  },
  stepsText: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'BeVietnamProMedium',
    opacity: 0.3,
    marginTop: 32,
  },
});
