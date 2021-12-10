import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contact from "./Contact/contact-reducer";
import filter from "./Filter/filter-reducer";

const persistConfig = {
  key: "hello",
  storage,
};
const rootReducer = combineReducers({
  items: contact,
  filter: filter,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
