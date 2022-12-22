import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {eventId: null, username: null, level: null, sport: null, date: null, hour: null, address: null, description: null, latitude: null, longitude: null}
};

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    transferEvent: (state, action) => {
        state.value.eventId = action.payload.eventId;
        state.value.username = action.payload.username;
        state.value.level = action.payload.level;
        state.value.sport = action.payload.sport;
        state.value.date = action.payload.date;
        state.value.hour = action.payload.hour;
        state.value.address = action.payload.address;
        state.value.description = action.payload.description;
        state.value.latitude = action.payload.latitude;
        state.value.longitude = action.payload.longitude;
    },
  },
});

export const { transferEvent } = eventSlice.actions;
export default eventSlice.reducer;