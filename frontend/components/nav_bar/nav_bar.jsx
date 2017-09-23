import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  return (
    <div className="dashboard-nav">
      <Link to="/home">
        <h1 className="logo">Shuttr</h1>
      </Link>
      <div className="user-buttons">
        <Image publicId={currentUser.img_url}
          cloudName="shuttr"
          className="avatar"
          >
          <Transformation height="100" width="100" crop="thumb" />
        </Image>
        <Link to="/upload">
          <i className="fa fa-cloud-upload" aria-hidden="true"></i>
        </Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
