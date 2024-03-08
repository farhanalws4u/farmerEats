import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
} from 'react-native';
import PasswordIcon from '../assets/images/passwordIcon.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackNavigatorParamsList} from '../navigation/navigation.types';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  enableForgotBtn?: boolean;
  containerStyles?: ViewStyle;
  navigation?: StackNavigationProp<StackNavigatorParamsList>;
}

const GenericPasswordInput: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  enableForgotBtn,
  containerStyles,
  navigation,
}) => {
  return (
    <>
      <View style={{...styles.inputContainer, ...containerStyles}}>
        <PasswordIcon style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={true}
          keyboardType={'default'}
        />
        {enableForgotBtn && navigation && (
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 330,
    borderRadius: 8,
    backgroundColor: '#261c1214',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 48,
    width: 330,
    fontSize: 14,
    borderRadius: 8,
    lineHeight: 20,
    marginLeft: 10,
    color: '#000',
    fontFamily: 'BeVietnamProRegular',
  },
  icon: {width: 15, height: 15},
  forgotButton: {},
  forgotText: {
    color: '#D5715B',
    fontSize: 14,
    fontFamily: 'BeVietnamProRegular',
  },
});

export default GenericPasswordInput;
