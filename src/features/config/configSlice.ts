import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { TechRadarConfig, MOCKCONFIG } from '../../components/TechRadar/config';

interface ConfigState {
    map: {}
}

const initialState: ConfigState = {
    map: {}
};

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        get: (state, action: PayloadAction<TechRadarConfig>) => {
            state.map = action.payload;
        },
    },
});

export const { get } = configSlice.actions;

export const getConfig = (): AppThunk => dispatch => {
    return commonApi.loadConfig().then(payload => {
        payload = MOCKCONFIG; //@TODO: remove when backend is done
        dispatch(get(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const configObject = (state: RootState) => state.config.map;

export default configSlice.reducer;
