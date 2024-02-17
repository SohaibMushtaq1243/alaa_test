import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthTextInput from "../../components/Input/AuthTextInput";
import AuthButton from "../../components/Button/AuthButton";
import {createUse, geref} from "../../shared/services/firebase.service";

const Sigup = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <AuthTextInput
      placeholder={"Enter your email ......"}
        value={email}
        onChange={(text: string) => {
          console.log(text), setEmail(text);
        }}
      />
      <AuthTextInput
      placeholder={"Enter your password ......"}
        value={password}
        onChange={(text: string) => {
          console.log(text), setPassword(text);
        }}
        secureTextEntry={true}
      />
      <AuthButton title="Submit" onPress={async()=>{
        const response:boolean = await createUse(email,password);
        console.log("res -----------------",response)
        if(response){
          geref(email)
          navigation.goBack();
        }
      }}/>
    </View>
  );
};

export default Sigup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
