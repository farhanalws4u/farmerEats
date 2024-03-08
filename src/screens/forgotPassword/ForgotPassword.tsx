import {StyleSheet, Text, View, useColorScheme, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';
import GenericTextInput from '../../components/GenericTextInput';
import PhoneIcon from '../../assets/images/phoneIcon.svg';
import GenericButton from '../../components/GenericButton';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'ForgotPassword'>;
  route: RouteProp<StackNavigatorParamsList, 'ForgotPassword'>;
}

const ForgotPassword: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChangeInput = (value: string): void => {
    setPhoneNumber(value);
  };

  const handleSendCode = () => {
    console.log('sending code');
    navigation.navigate('VerifyOtp');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoTitle}>FarmerEats</Text>
          <Text style={styles.welcomeText}>Forgot Password?</Text>
          <View style={styles.signUpContainer}>
            <Text style={styles.newText}>Remember your password? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.createText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <GenericTextInput
              type="phone"
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={handleChangeInput}
              Icon={PhoneIcon}
            />
            <GenericButton
              containerStyles={styles.loginBtn}
              onPress={handleSendCode}
              title={'Send Code'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

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
  signUpContainer: {
    marginTop: 24,
    flexDirection: 'row',
  },
  createText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#D5715B',
    fontFamily: 'BeVietnamProMedium',
  },
  newText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#000',
    opacity: 0.3,
    fontFamily: 'BeVietnamProMedium',
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
});
