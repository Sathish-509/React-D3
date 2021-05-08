import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchExtraPowerDetails } from './extraPowerAPI';
import { ExtraPower } from './ExportPower.model';

export interface ExtraPowerState {
  value: ExtraPower[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ExtraPowerState = {
  value: [],
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'exportPower/fetchExtraPower',
  async () => {
    debugger;
    const response = await fetchExtraPowerDetails();
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const selectExportPowerList = (state: RootState) => state.exportPower.value;

export default counterSlice.reducer;
