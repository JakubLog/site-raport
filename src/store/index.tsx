import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

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

const SliceReducers = combineReducers({
  edit: edit.reducer
});

export const store = configureStore({
  reducer: SliceReducers
});

export type RootTypes = ReturnType<typeof SliceReducers>;
