import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { config1 } from '../../mock/config1';

interface ConfigState {
    map: {}
}

const initialState: ConfigState = {
    map: {}
};

export const config1Slice = createSlice({
    name: 'config1',
    initialState,
    reducers: {
        getConfig1: (state, action: PayloadAction<any>) => {
            state.map = action.payload;
        },
    },
});

export const { getConfig1 } = config1Slice.actions;

export const getConfig1Action = (): AppThunk => dispatch => {
    return commonApi.loadConfig1().then(payload => {
        payload = config1; //@TODO: remove when backend is done
        dispatch(getConfig1(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const config1Object = (state: RootState) => state.config1.map;

export default config1Slice.reducer;
