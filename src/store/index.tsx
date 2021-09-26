import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

export const initialState = {
  name: false,
  email: false,
  bio: false
};

const edit = createSlice({
  name: 'edit',
  initialState: initialState,
  reducers: {
    changeEditionState(state, action: { payload: { name: keyof typeof initialState }; type: string }) {
      return { ...state, [action.payload.name]: !state[action.payload.name] };
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
