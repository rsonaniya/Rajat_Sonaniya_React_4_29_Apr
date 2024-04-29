import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStart());
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsError(error.message));
  }
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = false;
    },
    fetchPostsSuccess(state, action) {
      state.loading = false;
      state.error = false;
      state.posts = action.payload;
    },
    fetchPostsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsError } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;

export default postsSlice.reducer;
