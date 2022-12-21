import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { firstname: null, email: null, token: null, location: {latitude: null, longitude: null, latitudeDelta: null, longitudeDelta: null} },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.value.firstname = action.payload.firstname;
      state.value.email = action.payload.email;
      state.value.token = action.payload.token;
    },
    signUp: (state, action) => {
        state.value.firstname = action.payload.firstname;
        state.value.email = action.payload.email;
        state.value.token = action.payload.token;
    },
    userGeoLocation: (state, action) => {
      state.value.location.latitude = action.payload.latitude;
      state.value.location.longitude = action.payload.longitude;
      state.value.location.latitudeDelta = action.payload.latitudeDelta;
      state.value.location.longitudeDelta = action.payload.longitudeDelta;
  },
    logout: (state) => {
        state.value.firstname = null;
        state.value.email = null;
        state.value.password = null;
        state.value.token = null;
        state.value.userId = null;
    },
  },
});

export const { signIn, signUp, userGeoLocation } = userSlice.actions;
export default userSlice.reducer;