import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { config2 } from '../../mock/config2';

interface ConfigState {
    map: {}
}

const initialState: ConfigState = {
    map: {}
};

export const config2Slice = createSlice({
    name: 'config2',
    initialState,
    reducers: {
        getConfig2: (state, action: PayloadAction<any>) => {
            state.map = action.payload;
        },
    },
});

export const { getConfig2 } = config2Slice.actions;

export const getConfig2Action = (): AppThunk => dispatch => {
    return commonApi.loadConfig2().then(payload => {
        payload = config2; //@TODO: remove when backend is done
        dispatch(getConfig2(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const config2Object = (state: RootState) => state.config2.map;

export default config2Slice.reducer;
