import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { config4 } from '../../mock/config4';

interface ConfigState {
    map: {}
}

const initialState: ConfigState = {
    map: {}
};

export const config4Slice = createSlice({
    name: 'config4',
    initialState,
    reducers: {
        getConfig4: (state, action: PayloadAction<any>) => {
            state.map = action.payload;
        },
    },
});

export const { getConfig4 } = config4Slice.actions;

export const getConfig4Action = (): AppThunk => dispatch => {
    return commonApi.loadConfig4().then(payload => {
        payload = config4; //@TODO: remove when backend is done
        dispatch(getConfig4(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const config4Object = (state: RootState) => state.config4.map;

export default config4Slice.reducer;
