import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import {RouteProp} from '@react-navigation/core';
import GenericButton from '../../components/GenericButton';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'VerifyOtp'>;
  route: RouteProp<StackNavigatorParamsList, 'VerifyOtp'>;
}

const VerifyOtp: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);
  const inputRefs = useRef<TextInput[]>([]);

  const focusInput = (index: number) => {
    console.log({index});
    if (inputRefs.current[index]) {
      console.log('here');
      inputRefs.current[index].focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 4 && value !== '') {
        focusInput(index + 1);
      }
    }
  };

  const handleKeyPress = (
    index: number,
    {nativeEvent: {key}}: {nativeEvent: {key: string}},
  ) => {
    console.log('outside');
    if (key === 'Backspace' && index > 0) {
      console.log('inside');
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      focusInput(index - 1);
    }
  };
  const handleSubmitOtp = (): void => {
    console.log('submitting otp');
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoTitle}>FarmerEats</Text>
          <Text style={styles.welcomeText}>Verify OTP</Text>
          <View style={styles.signUpContainer}>
            <Text style={styles.newText}>Remember your password? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.createText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.otpInputContainer}>
              {otp.map((value, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref!)}
                  style={styles.input}
                  maxLength={1}
                  keyboardType="numeric"
                  value={value}
                  onChangeText={text => handleChange(index, text)}
                  onKeyPress={e => handleKeyPress(index, e)}
                  autoComplete="sms-otp"
                />
              ))}
            </View>
            <GenericButton
              containerStyles={styles.loginBtn}
              onPress={handleSubmitOtp}
              title={'Submit'}
            />
            <TouchableOpacity style={styles.resendBtn}>
              <Text style={styles.resendText}>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyOtp;

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
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderRadius: 8,
    width: 58,
    height: 59,
    textAlign: 'center',
    backgroundColor: '#261c1214',
    color: '#000',
    fontSize: 16,
  },
  loginBtn: {
    marginTop: 32,
  },
  resendBtn: {
    marginTop: 16,
  },
  resendText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
