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
              onPress={() => {}}
              title={'Login'}
            />
            <Text style={styles.orText}>or login with</Text>
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
    marginTop: 90,
    fontFamily: 'BeVietnamProBold',
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
    lineHeight: 14,
    marginTop: 32,
    textAlign: 'center',
    color: '#261C12',
    opacity: 0.3,
    fontFamily: 'BeVietnamProMedium',
  },
});
