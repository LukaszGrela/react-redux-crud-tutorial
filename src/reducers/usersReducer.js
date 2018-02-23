import { LIST_USERS_SUCCESS, LIST_USERS_FAILURE, LIST_USERS, LIST_USERS_START } from "../actions/actionUsers";

const INITIAL_STATE = { usersList: { users: [], pagination: { page: 0, per_page: 0, total: 0, total_pages: 0 }, error: null, loading: false } };

export default (state = INITIAL_STATE, action) => {
    console.log("usersReducer", action);
    let error;
    switch (action.type) {
        case LIST_USERS_START:
            return { ...state, usersList: { ...state.usersList, error: null, loading: true } };
        case LIST_USERS:
            return { ...state, usersList: { ...state.usersList, error: null, loading: true } };
        case LIST_USERS_SUCCESS:
            return {
                ...state, usersList: {
                    ...state.usersList,
                    users: [...action.list.data],
                    pagination: {
                        ...state.usersList.pagination,
                        page: action.list.page,
                        per_page: action.list.per_page,
                        total: action.list.total,
                        total_pages: action.list.total_pages
                    },
                    error: null, loading: false
                }
            };
        case LIST_USERS_FAILURE:
            error = action.error || { message: action.error.message };
            return { ...state, usersList: { users: [], error: error, loading: false } };

        default:
            return state;
    }

};