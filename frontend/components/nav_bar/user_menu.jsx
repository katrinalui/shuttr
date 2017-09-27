import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-menu">
      <div className="user-menu-links">
        <Link to={`/users/${currentUser.id}/photos`}>Photos</Link>
        <Link to={`/users/${currentUser.id}/albums`}>Albums</Link>
        <a onClick={logout}>Logout</a>
      </div>
    </div>
  );
};
