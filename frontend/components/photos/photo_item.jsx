import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const PhotoItem = ({photo, width}) => {
  const height = Math.round(width * (photo.height / photo.width));

  return (
    <div className="image-container" style={{ height, width }}>
      <Link to={`/photos/${photo.id}`}>
        <Image publicId={photo.img_url} cloudName="shuttr" >
          <Transformation width="800" crop="scale" />
        </Image>
      </Link>
    </div>
  );
};

export default PhotoItem;
