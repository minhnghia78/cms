import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HealthStatus } from '../types';
import { apiService } from '../services/apiService';

interface HealthState {
  data: HealthStatus | null;
  loading: boolean;
  error: string | null;
}

const initialState: HealthState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchHealth = createAsyncThunk('health/fetchHealth', async (_, thunkAPI) => {
  try {
    return await apiService.checkHealth();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to check backend health');
  }
});

const healthSlice = createSlice({
  name: 'health',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHealth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHealth.fulfilled, (state, action: PayloadAction<HealthStatus>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchHealth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default healthSlice.reducer; 