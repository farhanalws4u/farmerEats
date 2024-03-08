import {
  Text,
  SafeAreaView,
  StatusBar,
  useColorScheme,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {StackNavigatorParamsList} from '../../navigation/navigation.types';
import GenericButton from '../../components/GenericButton';
import BannerOne from '../../assets/images/onboardingOneBanner.svg';
import BannerTwo from '../../assets/images/onboardingTwoBanner.svg';
import BannerThree from '../../assets/images/onboardingThreeBanner.svg';

interface IProps {
  navigation: StackNavigationProp<StackNavigatorParamsList, 'Onboarding'>;
  route: RouteProp<StackNavigatorParamsList, 'Onboarding'>;
}

let screenHeight = Dimensions.get('screen').height;
let screenWidth = Dimensions.get('screen').width;
let buttonSectionHeigh = 422;

const Onboarding: React.FC<IProps> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const renderData = [
    {
      id: 1,
      banner: 'onboardingOne',
      title: 'Quality',
      description:
        'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
      bgColor: '#5EA25F',
    },
    {
      id: 2,
      banner: 'onboardingTwo',
      title: 'Convenient',
      description:
        'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
      bgColor: '#D5715B',
    },
    {
      id: 3,
      banner: 'onboardingThree',
      title: 'Local',
      description:
        'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time. ',
      bgColor: '#F8C569',
    },
  ];

  const [activeData, setActiveData] = useState(renderData[0]);

  const handleChangeRenderData = () => {
    const nextIndex = (activeData.id % 3) + 1;
    setActiveData(
      renderData.find(item => item.id === nextIndex) || renderData[0],
    );
    if (activeData.id === 3) navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{...styles.container, backgroundColor: activeData.bgColor}}>
        <View style={styles.banner_section}>
          {activeData.id === 1 ? (
            <BannerOne />
          ) : activeData.id === 2 ? (
            <BannerTwo />
          ) : (
            <BannerThree />
          )}
        </View>
        <View style={styles.button_section}>
          <Text style={styles.button_section_heading}>{activeData.title}</Text>
          <Text style={styles.button_section_description}>
            {activeData.description}
          </Text>
          <View style={styles.paginationSection}>
            {renderData.map(data => {
              return (
                <TouchableOpacity
                  key={data.id}
                  onPress={() => setActiveData(data)}
                  style={
                    data.id === activeData.id ? styles.activeDot : styles.dot
                  }></TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.buttonContainer}>
            <GenericButton
              buttonStyles={{
                ...styles.button,
                backgroundColor: activeData.bgColor,
              }}
              containerStyles={styles.btnMainContainer}
              title={'Join the movement!'}
              onPress={handleChangeRenderData}
            />
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5EA25F',
  },
  banner_section: {
    height: screenHeight - buttonSectionHeigh,
  },
  button_section: {
    height: buttonSectionHeigh,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    padding: 31,
  },
  banner_img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  button_section_heading: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'BeVietnamProBold',
  },
  button_section_description: {
    marginTop: 40,
    textAlign: 'center',
    color: '#261C12',
    fontSize: 14,
    lineHeight: 20,
    fontFamily: 'BeVietnamProRegular',
  },
  button: {
    paddingVertical: 17,
    backgroundColor: '#5EA25F',
  },
  btnMainContainer: {
    width: 236,
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  loginBtn: {
    marginTop: 16,
    textDecorationLine: 'underline',
    fontFamily: 'BeVietnamProRegular',
  },
  loginBtnText: {
    textDecorationLine: 'underline',
    color: '#261C12',
    fontFamily: 'BeVietnamProRegular',
  },
  paginationSection: {
    marginTop: 27,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: screenWidth - 260,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 1000,
    backgroundColor: '#261C12',
  },
  activeDot: {
    width: 16.5,
    height: 7,
    borderRadius: 46,
    backgroundColor: '#261C12',
  },
});

export default Onboarding;
