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
import GenericPasswordInput from '../../components/GenericPasswordInput';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'ResetPassword'>;
  route: RouteProp<StackNavigatorParamsList, 'ResetPassword'>;
}

const ResetPassword: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [formData, setFormData] = useState({
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleChangeInput = (key: string, value: string): void => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value,
    }));
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
          <Text style={styles.welcomeText}>Reset Password</Text>
          <View style={styles.signUpContainer}>
            <Text style={styles.newText}>Remember your password? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.createText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <GenericPasswordInput
              placeholder="New Password"
              value={formData.newPassword}
              onChangeText={(text: string) =>
                handleChangeInput('newPassword', text)
              }
              containerStyles={styles.input}
            />
            <GenericPasswordInput
              placeholder="Confirm New Password"
              value={formData.confirmNewPassword}
              onChangeText={(text: string) =>
                handleChangeInput('confirmNewPassword', text)
              }
              containerStyles={styles.input}
            />
            <GenericButton
              containerStyles={styles.loginBtn}
              onPress={handleSendCode}
              title={'Submit'}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;

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
});
