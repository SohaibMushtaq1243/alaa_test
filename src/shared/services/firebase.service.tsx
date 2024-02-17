import auth from "@react-native-firebase/auth";
import database, { firebase } from "@react-native-firebase/database";
import { Alert } from "react-native";

export const createUse = async (email: string, password: string): any => {
  try {
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created!");
        return true;
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          Alert.alert("That email address is invalid!");
        }

        console.error(error);
        return false;
      });
  } catch (e) {
    return false;
  }
};

export const login = async (email: string, password: string) => {
  return await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("User account signed in!");
      return true;
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
        Alert.alert("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        Alert.alert("That email address is invalid!");
      }

      console.error(error);
      return false;
    });
};
export const userLogout = async () => {
  return await auth()
    .signOut()
    .then(() => console.log("User signed out!"))
    .catch((error: any) => {
      Alert.alert(JSON.stringify(error));
    });
};
export const initializaData=async(email:any)=>{
  const data = {};
  data[email]= []
  return await database().ref('/user').set(data);
}
export const getData = async (email: string) => {
  return await database()
    .ref("/user/"+email.replace('.',''))
    .once("value")
    .then((snapshot) => {
      console.log("User data-: ",snapshot.val());
      return snapshot.val();
    });
};


export const setData = (data: any) => {
  try {
    console.log(data.newdata)
    console.log("list",data.previous)
    console.log("email",data.email)
    let obj = {};
    obj[data.email.replace('.','')] = [data.newdata,...data.previous]
    database()
      .ref("/user")
      .update(obj);
  } catch (error) {
    console.error("Error setting user data:", error);
  }
};
export const geref=(email:string)=>{
  try {
    console.log(email);
    let data:any;
    data = [{name:""},{name:""},{name:""},{name:""}]
    const route = "/user/"+email.replace('.','');
    console.log("route ----------",route)
    database()
      .ref(route)
      .set(data)
      .then(() => console.log('Data updated.'))
      .catch((e)=>console.log("getref eror",e))
  } catch (error) {
    console.error("Error setting user data:", error);
  }
};