import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Users from './Users';
import PaginatorContainer from '../containers/PaginatorContainer';

class UsersList extends Component {
    static propTypes = {
        actionListUsers: PropTypes.func,
        usersList: PropTypes.object
    }

    componentWillMount = () => {
        this.props.actionListUsers();
        console.log("UsersList#componentWillMount", this.props);
    }

    render() {
        const { users = [], loading: isLoading, error } = this.props.usersList;
        const loading = isLoading === true ? 'Loading...' : 'Loaded';
        console.log("UsersList#render", users, isLoading, error);

        return (
            <div className='users-list-component'>
                <h1>Users</h1>
                {isLoading && <div className='loading'>Loading...</div>}
                {!isLoading && <div className='list'>
                    <PaginatorContainer />
                    <Users users={users} />
                    <PaginatorContainer />
                </div>}
            </div>
        );
    }
}

export default UsersList
