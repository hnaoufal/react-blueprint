import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, usersList } from './usersSlice';

export const UsersTable = () => {
    const users = useSelector(usersList)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return <div>{users.map(user => <div key={user.id}>{user.id}</div>)}</div>
}
