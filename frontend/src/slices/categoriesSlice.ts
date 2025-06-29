import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Category, CategoryInput } from '../types';
import { apiService } from '../services/apiService';

interface CategoriesState {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async (_, thunkAPI) => {
  try {
    return await apiService.getCategories();
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to fetch categories');
  }
});

export const createCategory = createAsyncThunk('categories/createCategory', async (category: CategoryInput, thunkAPI) => {
  try {
    return await apiService.createCategory(category);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to create category');
  }
});

export const updateCategory = createAsyncThunk('categories/updateCategory', async ({ id, category }: { id: number, category: CategoryInput }, thunkAPI) => {
  try {
    return await apiService.updateCategory(id, category);
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to update category');
  }
});

export const deleteCategory = createAsyncThunk('categories/deleteCategory', async (id: number, thunkAPI) => {
  try {
    await apiService.deleteCategory(id);
    return id;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(err.message || 'Failed to delete category');
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createCategory.fulfilled, (state, action: PayloadAction<Category>) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action: PayloadAction<Category>) => {
        const idx = state.categories.findIndex(c => c.id === action.payload.id);
        if (idx !== -1) state.categories[idx] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action: PayloadAction<number>) => {
        state.categories = state.categories.filter(c => c.id !== action.payload);
      });
  },
});

export default categoriesSlice.reducer; 