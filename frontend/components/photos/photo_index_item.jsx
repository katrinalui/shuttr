import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const PhotoIndexItem = ({photo, width}) => {
  const height = Math.round(width * (photo.height / photo.width)) + 20;

  return (
    <div className="photo-index-item" style={{ height, width }}>
      <div className="photo-index-item-desc">
        <Link to={`/users/${photo.owner_id}/photos`}
          className="username">{photo.owner}
        </Link>
        &nbsp;&nbsp;
        <span className="posted-time-ago">{photo.posted_time_ago}</span>
      </div>
      <Link to={`/photos/${photo.id}`}>
        <Image publicId={photo.img_url} cloudName="shuttr" >
          <Transformation width="1000" crop="scale" />
        </Image>
      </Link>
    </div>
  );
};

export default PhotoIndexItem;
