import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { WIDTH } from "../../AppConstant";

const AuthTextInput = ({ secureTextEntry,placeholder, value, onChange, bodyStyle }: any) => {
  return (
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={[bodyStyle,styles.container]}
        secureTextEntry={secureTextEntry||false}
      />
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
    container:{
        width:WIDTH * 0.7,
        marginVertical:10
    }
});
