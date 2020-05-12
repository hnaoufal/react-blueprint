import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import entriesReducer from '../features/entries/entriesSlice';
import configReducer from '../features/config/configSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    entries: entriesReducer,
    config: configReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
