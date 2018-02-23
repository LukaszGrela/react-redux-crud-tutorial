import React, { Component } from 'react'
import PropTypes from 'prop-types'
import User from './User';

import '../styles/components/Users.scss';

export default class Users extends Component {
    static propTypes = {
        users:PropTypes.arrayOf(PropTypes.object)
    }
  render() {
    return (
      <ul className='users-list'>
        {
            this.props.users.map(user => {
                return <User data={user} key={user.id} />;
            })
        }
      </ul>
    )
  }
}
