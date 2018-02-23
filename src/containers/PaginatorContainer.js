import { connect } from 'react-redux'
import {
    actionListUsers,
    actionListUsersSuccess,
    actionListUsersFailure,
    actionListUsersStart
} from '../actions/actionUsers';
import Paginator from '../components/Paginator';

const mapStateToProps = (state) => {
    const { pagination } = state.users.usersList;
    console.log("mapStateToProps", state, pagination);
    return {
        page: pagination.page,
        per_page: pagination.per_page,
        total: pagination.total,
        total_pages: pagination.total_pages,
    };
}


const mapDispatchToProps = (dispatch) => ({
    changePage: (page) => {
        dispatch(actionListUsersStart());
        dispatch(actionListUsers(page)).then((response) => {
            !response.error ?
                dispatch(actionListUsersSuccess(response.payload.data))
                :
                dispatch(actionListUsersFailure(response.payload.data));
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);