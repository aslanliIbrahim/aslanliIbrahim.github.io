import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USERS } from "../../common/constants";
import { getUsers } from "../../services/userService";

const name = USERS;

const initialState = { users: [], isLoading:false, isDirty:false };

export const getUsersAction = createAsyncThunk("users/getUsers", async () => {
  const response = await getUsers();
  return response.data;
});

const extraReducers = {
  [getUsersAction.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
    state.users = action.payload;
  },
  [getUsersAction.reject]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
  },
  [getUsersAction.pending]: (state, action) => {
    state.isLoading = true;
  },
};

export const userSlice = createSlice({ name, initialState, extraReducers });

export default userSlice.reducer;