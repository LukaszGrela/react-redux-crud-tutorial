import React, { Component } from 'react'

import '../styles/components/User.scss';

export default class User extends Component {
  render() {
      const {last_name, first_name, avatar} = this.props.data;
    return (
      <li className='user item'>
        <img src={avatar} className='avatar circle'/>
        <div className='content'><h3>{`${last_name}, ${first_name}`}</h3></div>
      </li>
    )
  }
}
