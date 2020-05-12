import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';
import { Entries, MOCKENTRIES } from '../../components/TechRadar/config';


interface EntriesState {
    list: Entries[];
}

const initialState: EntriesState = {
    list: [],
};

export const entriesSlice = createSlice({
    name: 'entries',
    initialState,
    reducers: {
        get: (state, action: PayloadAction<Entries[]>) => {
            state.list = action.payload;
        },
    },
});

export const { get } = entriesSlice.actions;

export const getEntries = (): AppThunk => dispatch => {
    return commonApi.loadEntries().then(payload => {
        payload = MOCKENTRIES; // @TODO: remove when BE done
        dispatch(get(payload));
    }).catch(err => {
        console.error('error: ', err)
    })
};

export const entriesList = (state: RootState) => state.entries.list;

export default entriesSlice.reducer;
