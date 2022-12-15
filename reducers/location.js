import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    eventGeoLocation: (state, action) => {
      state.value.push(action.payload);
    }
  },
});

export const { eventGeoLocation } = locationSlice.actions;
export default locationSlice.reducer;