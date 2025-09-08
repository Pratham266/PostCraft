import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../lib/api';

// Async thunk for user login
export const saveToLibrary = createAsyncThunk(
  'saveToLibrary',
  async ({ posts, postType }, { rejectWithValue }) => {
    try {
      const response = await api.post('/posts/saveToLibrary', {
        data: posts,
        postType,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk for get all posts from library
export const getAllPostsFromLibrary = createAsyncThunk(
  'getAllPostsFromLibrary',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/posts/getPosts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    loading: null,
    libraryPosts: [],
    saveToLibraryLoading: null,
    success: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.loading = null;
      state.libraryPosts = [];
      state.saveToLibrary = null;
      state.success = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // save to library
      .addCase(saveToLibrary.pending, (state) => {
        state.saveToLibraryLoading = true;
        state.error = null;
      })
      .addCase(saveToLibrary.fulfilled, (state) => {
        state.saveToLibraryLoading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(saveToLibrary.rejected, (state, action) => {
        state.saveToLibraryLoading = false;
        state.error = action.payload;
      })
      // get all posts from library
      .addCase(getAllPostsFromLibrary.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllPostsFromLibrary.fulfilled, (state, action) => {
        state.loading = false;
        state.libraryPosts = action.payload.data;
        state.error = null;
      })
      .addCase(getAllPostsFromLibrary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = librarySlice.actions;
export default librarySlice.reducer;
