import { connect } from 'react-redux'
import UsersList from '../components/UsersList';
import {
    actionListUsers,
    actionListUsersSuccess,
    actionListUsersFailure,
    actionListUsersStart
} from '../actions/actionUsers';

const mapStateToProps = (state) => ({
    usersList: state.users.usersList
});

const mapDispatchToProps = (dispatch) => ({
    actionListUsers: () => {
        dispatch(actionListUsersStart());
        dispatch(actionListUsers()).then((response) => {
            !response.error ?
                dispatch(actionListUsersSuccess(response.payload.data))
                :
                dispatch(actionListUsersFailure(response.payload.data));
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);