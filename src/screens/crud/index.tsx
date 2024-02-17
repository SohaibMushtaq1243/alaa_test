import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  geref,
  getData,
  setData,
} from "../../shared/services/firebase.service";
import AuthTextInput from "../../components/Input/AuthTextInput";
import AuthButton from "../../components/Button/AuthButton";
import { Title } from "react-native-paper";

const crud = () => {
  const [list, setList] = useState([]);
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const InitialData = async () => {
    // geref();
    const data = await getData("shaibmushtaq621@gmail.com");
    if (data !== undefined) setList(data);
    console.log("--------------------", data);
  };
  useEffect(() => {
    InitialData();
  }, []);
  return (
    <View>
      <FlatList
        data={list}
        ListHeaderComponent={
          <>
            <View style={styles.container}>
              <AuthTextInput
                placeholder={"Enter your Title ......"}
                value={title}
                onChange={(text: string) => {
                  console.log(text), setTitle(text);
                }}
              />
              <AuthTextInput
                placeholder={"Enter your password ......"}
                value={description}
                onChange={(text: string) => {
                  console.log(text), setDescription(text);
                }}
                secureTextEntry={true}
              />
              <AuthButton
                title="Submit"
                onPress={async () => {
                  const data: any = {
                    email: "sohaibmushtaq621@gmail.com",
                    age: 20,
                    gender: "male",
                  };
                  setData({
                    email: "sohaibmushtaq621",
                    previous: list,
                    newdata: data,
                  });
                  InitialData();
                }}
              />
            </View>
          </>
        }
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.Description}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default crud;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
