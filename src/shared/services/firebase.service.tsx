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
export const getData = async (userEmail: string) => {
  console.log(userEmail.replace('.',''))
  const url = "/user/"+userEmail.replace('.','');
  console.log(url)
  return await database()
    .ref(url)
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
    
  const url = "/user";
  console.log("set url -----------------------",url)
    let obj :any={};
    obj[data.email.replace('.','')] = [data.newdata,...data.previous]
    console.log("data ----",obj)
    database()
      .ref(url)
      .update(obj);
  } catch (error) {
    console.error("Error setting user data:", error);
  }
};
export  const UpateList=(email:string,list:any)=>{
  try {
    
  const url = "/user";
    let obj :any={};
    obj[email.replace('.','')] = list
    console.log("data ----",obj)
    database()
      .ref(url)
      .update(obj);
  } catch (error) {
    console.error("Error setting user data:", error);
  }
}
export const geref=(email:string)=>{
  try {
    console.log(email);
    let data:any;
    data = [{mesage:"New Account"}]
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