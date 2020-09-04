import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { config3 } from '../../mock/config3';

interface ConfigState {
    map: {}
}

const initialState: ConfigState = {
    map: {}
};

export const config3Slice = createSlice({
    name: 'config3',
    initialState,
    reducers: {
        getConfig3: (state, action: PayloadAction<any>) => {
            state.map = action.payload;
        },
    },
});

export const { getConfig3 } = config3Slice.actions;

export const getConfig3Action = (): AppThunk => dispatch => {
    return commonApi.loadConfig3().then(payload => {
        payload = config3; //@TODO: remove when backend is done
        dispatch(getConfig3(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const config3Object = (state: RootState) => state.config3.map;

export default config3Slice.reducer;
