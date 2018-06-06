import React from 'react';

import '../styles/components/User.scss';

const User = ({ last_name, first_name, avatar }) => (
  <li className="user item">
    <img src={avatar} className="avatar circle" />
    <div className="content">
      <h3>{`${last_name}, ${first_name}`}</h3>
    </div>
  </li>
);

export default User;
