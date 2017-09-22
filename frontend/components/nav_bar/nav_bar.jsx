import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

export default ({ currentUser, logout }) => {
  return (
    <div className="user-buttons">
      <Image publicId={currentUser.img_url} cloudName="shuttr" >
        <Transformation height="100" width="100" crop="thumb" />
      </Image>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
