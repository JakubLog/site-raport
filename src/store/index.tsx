import { createSlice, configureStore } from '@reduxjs/toolkit';

const edit = createSlice({
  name: 'edit',
  initialState: false,
  reducers: {
    changeEditionState(state, action) {
      return !state;
    }
  }
});

export const { changeEditionState } = edit.actions;

export const store = configureStore({
  reducer: {
    edit: edit.reducer
  }
});
