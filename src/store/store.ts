import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import config1Reducer from '../features/config1/config1Slice';
import config2Reducer from '../features/config2/config2Slice';
import config3Reducer from '../features/config3/config3Slice';
import config4Reducer from '../features/config4/config4Slice';

export const store = configureStore({
  reducer: {
    config1: config1Reducer,
    config2: config2Reducer,
    config3: config3Reducer,
    config4: config4Reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
