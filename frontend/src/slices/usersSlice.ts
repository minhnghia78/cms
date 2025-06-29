import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { User, UserInput } from '../types';
import { apiService } from '../services/apiService';

interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
  try {
    return await apiService.getUsers();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to fetch users');
  }
});

export const createUser = createAsyncThunk('users/createUser', async (user: UserInput, thunkAPI) => {
  try {
    return await apiService.createUser(user);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to create user');
  }
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }: { id: number, user: UserInput }, thunkAPI) => {
  try {
    return await apiService.updateUser(id, user);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to update user');
  }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number, thunkAPI) => {
  try {
    await apiService.deleteUser(id);
    return id;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to delete user');
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.users.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        const idx = state.users.findIndex(u => u.id === action.payload.id);
        if (idx !== -1) state.users[idx] = action.payload;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.users = state.users.filter(u => u.id !== action.payload);
      });
  },
});

export default usersSlice.reducer; 