import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { firstname: null, email: null, password: null, token: null },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.value.email = action.payload.email;
      state.value.password = action.payload.password;
      state.value.token = action.payload.token;
    },
    signUp: (state, action) => {
        state.value.firstname = action.payload.firstname;
        state.value.email = action.payload.email;
        state.value.password = action.payload.password;
        state.value.token = action.payload.token;
    },
    logout: (state) => {
        state.value.firstname = null;
        state.value.email = null;
        state.value.password = null;
        state.value.token = null;
    },
  },
});

export const { signIn, signUp } = userSlice.actions;
export default userSlice.reducer;