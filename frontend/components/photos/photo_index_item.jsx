import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const PhotoIndexItem = ({photo}) => {
  return (
    <div className="photo-index-item">
      <div className="photo-index-item-desc">
        <a className="username">{photo.owner}</a>
        &nbsp;&nbsp;
        <span className="posted-time-ago">{photo.posted_time_ago}</span>
      </div>
      <Link to={`/photos/${photo.id}`}>
        <Image publicId={photo.img_url} cloudName="shuttr" >
          <Transformation width="600" crop="scale" />
        </Image>
      </Link>
    </div>
  );
};

export default PhotoIndexItem;