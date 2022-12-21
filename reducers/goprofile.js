import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {username: null, dateOfBirth: null, level: null, sport: null, description: null, events: null, participate: null}
};

export const goprofileSlice = createSlice({
  name: 'goprofile',
  initialState,
  reducers: {
    transferUser : (state, action) => {
      state.value.username = action.payload.username;
      state.value.dateOfBirth = action.payload.dateOfBirth;
      state.value.level = action.payload.level;
      state.value.sport = action.payload.sport;
      state.value.description = action.payload.description;
      state.value.events = action.payload.events;
      state.value.participate = action.payload.participate;
    }
  },
});

export const { transferUser } = goprofileSlice.actions;
export default goprofileSlice.reducer;