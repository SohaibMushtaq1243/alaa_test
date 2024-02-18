import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { HEIGHT, WIDTH } from "../../AppConstant";

const CRUDButton = (props:any) => {
  return (
    <TouchableOpacity style={[props.buttonStyle,styles.buttonbody]} onPress={props.onPress}>
      <Text style={{ color: "white" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default CRUDButton;

const styles = StyleSheet.create({
  buttonbody: {
    height: HEIGHT * 0.03,
    width: WIDTH * 0.08,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
