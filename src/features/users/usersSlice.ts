import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../store/store';
import { commonApi } from '../../utils/api/common.api';

export interface UserModel {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

interface UsersState {
  list: UserModel[];
}

const initialState: UsersState = {
  list: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    get: (state, action: PayloadAction<UserModel[]>) => {
      state.list = action.payload;
    },
    update: (state, action: PayloadAction<UserModel>) => {
      state.list = state.list.map(a => {
        if (a.id === action.payload.id) {
          return action.payload;
        }

        return a;
      });
    },
    remove: (state, action: PayloadAction<UserModel>) => {
      state.list = state.list.filter(user => user.id === action.payload.id);
    },
    create: (state, action: PayloadAction<UserModel>) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const { get, update, remove, create } = usersSlice.actions;

export const getUsers = (): AppThunk => dispatch => {
  return commonApi.loadUsers().then(payload => {
    dispatch(get(payload));
  }).catch(err => {
    console.error('error: ', err)
  })
};

export const updateUsers = (users: UserModel): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(update(users));
  }, 1000);
};

export const removeUsers = (users: UserModel): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(remove(users));
  }, 1000);
};

export const createUsers = (users: UserModel): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(create(users));
  }, 1000);
};

export const usersList = (state: RootState) => state.users.list;

export default usersSlice.reducer;
