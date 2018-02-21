import { LIST_USERS_SUCCESS, LIST_USERS_FAILURE, LIST_USERS } from "../actions/actionUsers";

const INITIAL_STATE = { usersList: { users: [], error: null, loading: false } };

export default (state = INITIAL_STATE, action) => {
    console.log("usersReducer", action);
    let error;
    switch (action.type) {
        case LIST_USERS:
            return { ...state, usersList: { users: [], error: null, loading: true } };
        case LIST_USERS_SUCCESS:
            return { ...state, usersList: { users: [...action.list], error: null, loading: false } };
        case LIST_USERS_FAILURE:
            error = action.error || { message: action.error.message };
            return { ...state, usersList: { users: [], error: error, loading: false } };

        default:
            return state;
    }

};