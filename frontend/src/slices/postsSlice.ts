import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Post, PostInput } from '../types';
import { apiService } from '../services/apiService';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
  try {
    return await apiService.getPosts();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to fetch posts');
  }
});

export const createPost = createAsyncThunk('posts/createPost', async (post: PostInput, thunkAPI) => {
  try {
    return await apiService.createPost(post);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to create post');
  }
});

export const updatePost = createAsyncThunk('posts/updatePost', async ({ id, post }: { id: number, post: PostInput }, thunkAPI) => {
  try {
    return await apiService.updatePost(id, post);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to update post');
  }
});

export const deletePost = createAsyncThunk('posts/deletePost', async (id: number, thunkAPI) => {
  try {
    await apiService.deletePost(id);
    return id;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to delete post');
  }
});

export const publishPost = createAsyncThunk('posts/publishPost', async (id: number, thunkAPI) => {
  try {
    return await apiService.publishPost(id);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to publish post');
  }
});

export const archivePost = createAsyncThunk('posts/archivePost', async (id: number, thunkAPI) => {
  try {
    return await apiService.archivePost(id);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to archive post');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.posts.push(action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<Post>) => {
        const idx = state.posts.findIndex(p => p.id === action.payload.id);
        if (idx !== -1) state.posts[idx] = action.payload;
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<number>) => {
        state.posts = state.posts.filter(p => p.id !== action.payload);
      })
      .addCase(publishPost.fulfilled, (state, action: PayloadAction<Post>) => {
        const idx = state.posts.findIndex(p => p.id === action.payload.id);
        if (idx !== -1) state.posts[idx] = action.payload;
      })
      .addCase(archivePost.fulfilled, (state, action: PayloadAction<Post>) => {
        const idx = state.posts.findIndex(p => p.id === action.payload.id);
        if (idx !== -1) state.posts[idx] = action.payload;
      });
  },
});

export default postsSlice.reducer; 