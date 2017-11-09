import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album}) => {
  let divStyle = {
    backgroundImage: `url(https://res.cloudinary.com/shuttr/image/upload/c_scale,w_500/v1/${album.cover_photo_url})`
  };

  if (!album.cover_photo_url) {
    divStyle = {
      backgroundColor: 'gray'
    };
  }

  return (
    <Link to={`/albums/${album.id}`}>
      <div className="album-index-item" style={divStyle}>
        <div className="album-index-gradient">
          <div className="album-index-item-desc">
            <h2 className="album-title">{album.title}</h2>
            <h3 className="album-photo-count">{album.photo_count} photos</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AlbumIndexItem;
