import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-buttons">
      <img src={currentUser.img_url} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
