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
import SmileyIcon from '../../assets/images/smileyIcon.svg';
import LocationIcon from '../../assets/images/locationIcon.svg';
import HomeIcon from '../../assets/images/homeIcon.svg';
import TagIcon from '../../assets/images/tagIcon.svg';
import LeftArrowIcon from '../../assets/images/leftArrowIcon.svg';
import GenericButton from '../../components/GenericButton';
import GenericSelectInput from '../../components/GenericSelectInput';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'FarmInfo'>;
  route: RouteProp<StackNavigatorParamsList, 'FarmInfo'>;
}

const FarmInfo: React.FC<IProps> = ({navigation}) => {
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
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ];

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.logoTitle}>FarmerEats</Text>
          <Text style={styles.stepsText}>Signup 2 of 4</Text>
          <Text style={styles.welcomeText}>Farm Info</Text>
          <View style={styles.formContainer}>
            <GenericTextInput
              type="text"
              placeholder="Business Name"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={TagIcon}
            />
            <GenericTextInput
              type="text"
              placeholder="Informal Name"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={SmileyIcon}
              containerStyles={styles.input}
            />
            <GenericTextInput
              type="text"
              placeholder="Street Address"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={HomeIcon}
              containerStyles={styles.input}
            />
            <GenericTextInput
              type="text"
              placeholder="City"
              value={formData.email}
              onChangeText={(text: string) => handleChangeInput('email', text)}
              Icon={LocationIcon}
              containerStyles={styles.input}
            />
            <View style={styles.selectInputContainer}>
              <GenericSelectInput
                placeholder="State"
                options={states}
                onChangeText={() => console.log('select val')}
                containerStyles={styles.selectInput}
              />
              <GenericTextInput
                type="text"
                placeholder="Enter Zipcode"
                value={formData.email}
                onChangeText={(text: string) =>
                  handleChangeInput('email', text)
                }
                containerStyles={styles.zipCodeInput}
              />
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrowIcon />
              </TouchableOpacity>
              <GenericButton
                containerStyles={styles.loginBtn}
                onPress={() => {}}
                title={'Continue'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FarmInfo;

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
    marginTop: 40,
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
    marginTop: 200,
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
  selectInputContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectInput: {
    backgroundColor: '#d9d9d9f0',
    width: 126,
    height: 48,
    borderRadius: 8,
  },
  zipCodeInput: {
    width: 188,
  },
});
