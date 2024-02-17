import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import AuthTextInput from "../../components/Input/AuthTextInput";
import AuthButton from "../../components/Button/AuthButton";
import { login } from "../../shared/services/firebase.service";
import { useDispatch } from "react-redux";
import { userlogin } from "../../shared/reducer/rootReducer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
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
      </KeyboardAvoidingView>
      <AuthButton
        title="Submit"
        onPress={async () => {
          const response: boolean = await login(email, password);
          console.log("res -----------------", response);
          if (response) {
            dispatch(userlogin(email));
            navigation.navigate("Home");
          }
        }}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
