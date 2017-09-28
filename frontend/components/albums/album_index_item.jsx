import React from 'react';
import { Link } from 'react-router-dom';

const AlbumIndexItem = ({album}) => {
  let divStyle = {
    backgroundImage: `url(http://res.cloudinary.com/shuttr/image/upload/v1506372551/${album.cover_photo_url})`
  };

  if (!album.cover_photo_url) {
    divStyle = {
      backgroundColor: 'gray'
    };
  }

  return (
    <Link to={`/albums/${album.id}`}>
      <div className="album-index-item" style={divStyle}>
        <div className="album-index-item-desc">
          <h2 className="album-title">{album.title}</h2>
          <h3 className="album-photo-count">{album.photo_count} photos</h3>
        </div>
      </div>
    </Link>
  );
};

export default AlbumIndexItem;
