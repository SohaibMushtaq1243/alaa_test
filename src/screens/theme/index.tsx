import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Switch } from "react-native-paper";
import { setMode } from "../../shared/reducer/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import AppConstant from "../../AppConstant";

const theme = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const dispatch = useDispatch();

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  useEffect(() => {
    dispatch(setMode(isSwitchOn));
  }, [isSwitchOn]);
  
  return (
    <View style={[styles.container,{ backgroundColor:AppConstant().backgroundColor}]}>
      <View style={styles.row}>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        <Text style={{ color:AppConstant().color}}>Dark Mode</Text>
      </View>
    </View>
  );
};

export default theme;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  color:{
    color:AppConstant().color
  }
});
