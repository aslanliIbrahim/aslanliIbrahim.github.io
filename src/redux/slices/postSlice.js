import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS } from "../../common/constants";
import { getPosts } from "../../services/postService";

const name = POSTS;

const initialState = { posts: [], isLoading: false, isDirty: false };

export const getPostsByUserIdAction = createAsyncThunk(
  "posts/getPostsByUserId",
  async (userId) => {
    const response = await getPosts();
    const allPosts = response.data;
    // eslint-disable-next-line
    return allPosts.filter((p) => p.userId == userId);
  }
);

const extraReducers = {
  [getPostsByUserIdAction.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
    state.posts = action.payload;
  },
  [getPostsByUserIdAction.rejected]: (state, action) => {
    state.isLoading = false;
    state.isDirty = true;
  },
  [getPostsByUserIdAction.pending]: (state, action) => {
    state.isLoading = true;
  },
};

export const postSlice = createSlice({ name, initialState, extraReducers });

export default postSlice.reducer;
