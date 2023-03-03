import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../redux/slices/userSlice";
import postReducer from "../redux/slices/postSlice";
import albumReducer from "../redux/slices/albumSlice";

// The code below declares a store for Redux

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  albumReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
