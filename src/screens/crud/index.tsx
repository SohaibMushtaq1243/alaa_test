import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
  UpateList,
  getData,
  setData,
} from "../../shared/services/firebase.service";
import AuthTextInput from "../../components/Input/AuthTextInput";
import AuthButton from "../../components/Button/AuthButton";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";
import { HEIGHT, WIDTH } from "../../AppConstant";
import CRUDButton from "../../components/Button/CRUDButton";

const crud = () => {
  const {
    user: { userData },
  } = useSelector((state: any) => state);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [index,setValues] = useState(null);
  const InitialData = async () => {
    setTitle("");
    setDescription("");
    // geref();
    const data = await getData(userData.email);
    if (data !== undefined) setList(data);
    console.log("--------------------", data);
  };
  useEffect(() => {
    console.log("user --------", userData.email);
    InitialData();
  }, []);
  const filterList = (itemIndex: Number) => {
    return list.filter((item, index) => {
      if (index !== itemIndex) {
        return item;
      }
    });
  };
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={styles.container}>
        <AuthTextInput
          placeholder={"Enter your Title ......"}
          value={title}
          onChange={(text: string) => {
            console.log(text), setTitle(text);
          }}
        />
        <AuthTextInput
          placeholder={"Enter your Description ......"}
          value={description}
          onChange={(text: string) => {
            console.log(text), setDescription(text);
          }}
        />
        <AuthButton
          title="Submit"
          onPress={async () => {
            if (title === "" || "") {
              Alert.alert("Please fill the Inputs");
            }
            const data: any = {
              title: title,
              description: description,
            };
            if(index === null){
              setData({
                email: userData.email,
                previous: list,
                newdata: data,
              });
            } else{
              list[index] = data;
              setList(list);
              setValues(null);
              UpateList(userData.email, list);
            }
           
            InitialData();
          }}
        />
      </View>
      <FlatList
        data={list}
        renderItem={({ item, index }) => {
          if (!item.mesage) {
            return (
              <View>
                <View style={styles.item}>
                  <View style={styles.itemData}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                  </View>
                  <View style={styles.buttons}>
                    <CRUDButton
                      title="Delete"
                      onPress={() => {
                        const data = filterList(index);
                        console.log("filtered List ---------------", data);
                        UpateList(userData.email, data);
                        InitialData();
                      }}
                      buttonStyle={{ backgroundColor: "red" }}
                    />
                    <CRUDButton
                      title="Edit"
                      onPress={() => {
                        console.log(index);
                        setTitle(item.title);
                        setDescription(item.description)
                        setValues(index);
                      }}
                      buttonStyle={{ backgroundColor: "lightgray" }}
                    />
                  </View>
                </View>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default crud;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    borderColor: "lightblue",
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemData: {
    flexDirection: "column",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: WIDTH * 0.2,
  },
});
