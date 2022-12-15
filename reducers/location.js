import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { latitude: null, longitude: null, latitudeDelta: null, longitudeDelta: null },
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    userGeoLocation: (state, action) => {
        state.value.latitude = action.payload.latitude;
        state.value.longitude = action.payload.longitude;
        state.value.latitudeDelta = action.payload.latitudeDelta;
        state.value.longitudeDelta = action.payload.longitudeDelta;
    },
    eventGeoLocation: (state, action) => {
      state.value.latitude = action.payload.latitude;
      state.value.longitude = action.payload.longitude;
      state.value.latitudeDelta = action.payload.latitudeDelta;
      state.value.longitudeDelta = action.payload.longitudeDelta;
    }
  },
});

export const { userGeoLocation, eventGeoLocation } = locationSlice.actions;
export default locationSlice.reducer;