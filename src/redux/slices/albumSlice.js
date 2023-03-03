import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ALBUMS } from "../../common/constants";
import { getAlbums } from "../../services/albumService";

const name = ALBUMS;

const initialState = { albums: [], isLoading: false, isDirty: false };

export const getAlbumsByUserIdAction = createAsyncThunk(
  "albums/getAlbumsByUserId",
  async (userId) => {
    const response = await getAlbums();
    const allAlbums = response.data;
    // eslint-disable-next-line
    return allAlbums.filter((a) => a.userId == userId);
  }
);

const extraReducers = {
  [getAlbumsByUserIdAction.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
    state.albums = action.payload;
  },
  [getAlbumsByUserIdAction.rejected]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
  },
  [getAlbumsByUserIdAction.pending]: (state, action) => {
    state.isLoading = true;
  },
};

export const albumSlice = createSlice({ name, initialState, extraReducers });

export default albumSlice.reducer;
