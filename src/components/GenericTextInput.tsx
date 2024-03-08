import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';

interface Props {
  type: 'text' | 'email' | 'phone';
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  Icon?: React.ComponentType<any>;
  containerStyles?: ViewStyle;
}

const GenericTextInput: React.FC<Props> = ({
  type,
  placeholder,
  value,
  onChangeText,
  Icon,
  containerStyles,
}) => {
  return (
    <>
      <View style={{...styles.inputContainer, ...containerStyles}}>
        {Icon && <Icon style={styles.icon} />}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
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
});

export default GenericTextInput;
