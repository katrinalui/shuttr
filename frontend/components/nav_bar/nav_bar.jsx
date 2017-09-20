import React from 'react';

export default ({ currentUser, logout }) => {
  return (
    <div>
      <img src={currentUser.img_url} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
