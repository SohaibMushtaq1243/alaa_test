import Login from "./Login";
import Sigup from "./Sigup";

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthButton from "../../components/Button/AuthButton";

const MainAuth = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <AuthButton title="Login" onPress={()=>{navigation.navigate('Login')}}/>
      <AuthButton title="SignUp" onPress={()=>{navigation.navigate('SignUp')}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export { Login, Sigup, MainAuth };
