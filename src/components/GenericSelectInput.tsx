import React, {useState} from 'react';
import {View, TextInput, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import SelectInputIcon from '../assets/images/selectInputIcon.svg';

interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  containerStyles?: ViewStyle;
  options: string[];
}

const Icon: React.FC<{}> = () => {
  return (
    <View style={{marginRight: 10}}>
      <SelectInputIcon />
    </View>
  );
};

const GenericSelectInput: React.FC<Props> = ({
  placeholder,
  containerStyles,
  options,
}) => {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <View style={containerStyles}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          setIsSelect(true);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          return item;
        }}
        renderDropdownIcon={Icon}
        defaultButtonText={placeholder}
        defaultValue={null}
        buttonStyle={containerStyles}
        buttonTextStyle={
          isSelect ? styles.btnTextSelectedStyle : styles.btnTextStyle
        }
        selectedRowTextStyle={styles.selectedRowText} // text style of selected option in dropdown
        rowTextStyle={styles.rowText}
        dropdownStyle={styles.dropDown}
        selectedRowStyle={styles.selectedRow}
        search
        searchInputTxtColor={'#000'}
        searchInputTxtStyle={styles.searchInputText}
        searchPlaceHolder={'Search..'}
        searchInputStyle={styles.searchInputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btnTextStyle: {
    fontSize: 14,
    fontFamily: 'BeVietnamProRegular',
    lineHeight: 20,
    color: '#000',
    opacity: 0.3,
    textAlign: 'left',
  },
  btnTextSelectedStyle: {
    fontSize: 14,
    fontFamily: 'BeVietnamProRegular',
    lineHeight: 20,
    color: '#000',
    textAlign: 'left',
  },
  rowText: {
    color: '#000',
    opacity: 0.3,
    fontFamily: 'BeVietnamProRegular',
  },
  selectedRowText: {
    color: '#000',
    opacity: 1,
    fontFamily: 'BeVietnamProRegular',
  },
  dropDown: {
    borderRadius: 8,
    width: '85%',
  },
  selectedRow: {
    backgroundColor: '#d9d9d9f0',
  },
  searchInputStyle: {
    minWidth: '265%',
  },
  searchInputText: {
    fontFamily: 'BeVietnamProRegular',
    fontSize: 16,
  },
});

export default GenericSelectInput;
