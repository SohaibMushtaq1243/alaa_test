import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducer/rootReducer';
import { combineReducers } from "redux";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:[
    "user"
  ]

};
const reducers = combineReducers({
    user: rootReducer,
  });
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);