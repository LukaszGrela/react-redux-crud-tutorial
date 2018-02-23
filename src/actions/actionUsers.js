import axios from 'axios';
import { API_GATEWAY, API_LIST_USERS, API_USER_PATH, DELAY_PARAM } from '../constants';



// list users
export const LIST_USERS_START = 'gd:LIST_USERS_START';
export const actionListUsersStart = () => {
    return {
        type: LIST_USERS_START
    }
};
export const LIST_USERS = 'gd:LIST_USERS';
export const actionListUsers = (page = 1) => {
    const payload = axios.get(API_GATEWAY + API_LIST_USERS, { params: { ...DELAY_PARAM(0), page } });
    return {
        type: LIST_USERS,
        payload
    }
};

export const LIST_USERS_SUCCESS = 'gd:LIST_USERS_SUCCESS';
export const actionListUsersSuccess = (list = []) => ({
    type: LIST_USERS_SUCCESS,
    list
});
export const LIST_USERS_FAILURE = 'gd:LIST_USERS_FAILURE';
export const actionListUsersFailure = (error) => ({
    type: LIST_USERS_FAILURE,
    error
});

// --------------
// Get user
export const GET_USER = 'gd:GET_USER';
export const actionGetUser = (id = -1) => {
    const payload = axios.get(API_GATEWAY + API_USER_PATH(id), { params: { ...DELAY_PARAM(3) } });
    return {
        type: GET_USER,
        payload
    }
};

export const CREATE_USER = 'gd:CREATE_USER';
export const actionCreateUser = (data) => {
    const payload = axios.post(API_GATEWAY + API_LIST_USERS, data);
    return {
        type: CREATE_USER,
        payload
    }
};

export const DELETE_USER = 'gd:DELETE_USER';
export const actionDeleteUser = (id = -1) => {
    const payload = axios.delete(API_GATEWAY + API_USER_PATH(id));
    return {
        type: DELETE_USER,
        payload
    }
};