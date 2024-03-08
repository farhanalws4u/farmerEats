import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

type IProps = {
  onPress: () => void;
  buttonStyles?: any;
  title: String;
  containerStyles?: any;
};

const pixelRatio = PixelRatio.get();

const GenericButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...props.containerStyles}}
      onPress={props.onPress}>
      <View style={{...styles.button, ...props.buttonStyles}}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D5715B',
    paddingVertical: 13,
    borderRadius: 117 / pixelRatio,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    width: '100%',
  },
});

export default GenericButton;
