import * as React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import { KeyboardAvoidingView, LogBox } from "react-native";

import { PaperProvider } from "react-native-paper";
import { store, persistor } from "./src/shared/store";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
