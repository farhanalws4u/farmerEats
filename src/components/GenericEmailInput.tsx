import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  type: 'text' | 'email' | 'password' | 'phone';
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  Icon: React.ComponentType<any>;
}

const GenericTextInput: React.FC<Props> = ({
  type,
  placeholder,
  value,
  onChangeText,
  Icon,
}) => {
  return (
    <>
      <View style={styles.inputContainer}>
        {Icon && <Icon style={styles.icon} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password'}
          keyboardType={
            type === 'email'
              ? 'email-address'
              : type === 'phone'
              ? 'phone-pad'
              : 'default'
          }
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon: {width: 15, height: 15},
});

export default GenericTextInput;
