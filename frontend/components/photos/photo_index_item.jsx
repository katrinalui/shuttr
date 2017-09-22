import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

const PhotoIndexItem = ({photo}) => {
  return (
    <div className="photo-index-item">
      <div className="photo-index-item-desc">
        <span className="username">{photo.owner}</span>
        <span className="posted-time-ago">{photo.posted_time_ago}</span>
      </div>
      <a>
        <Image publicId={photo.img_url} cloudName="shuttr" >
          <Transformation width="400" crop="scale" />
        </Image>
      </a>
    </div>
  );
};

export default PhotoIndexItem;
