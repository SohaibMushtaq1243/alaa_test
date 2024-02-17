import { View, Text } from "react-native";
import React from "react";
import {useTheme} from 'react-native-paper';

const theme = () => {
  const theme = useTheme();
  return (
    <View style={{flex:1,backgroundColor:theme.colors.secondary}}>
      <Text>theme</Text>
    </View>
  );
};

export default theme;
