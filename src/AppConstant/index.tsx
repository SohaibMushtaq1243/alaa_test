import { Dimensions, PixelRatio } from "react-native";
import {store} from "../shared/store"

export const COLOR = {
  dark: {
    backgroundColor: "lightgray",
    color:'white',
  },
  light: {
    backgroundColor: "lightblue",
    color:'black',
  },
};
export const HEIGHT = Dimensions.get("screen").height;
export const WIDTH = Dimensions.get("screen").width;

const AppConstant = ()=>{
  const {darkmode} = store.getState().user;
  if(darkmode){
    return COLOR.dark;
  } else {
    return COLOR.light;
  }
}
export default AppConstant;
