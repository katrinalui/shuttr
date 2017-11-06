import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

const PhotoItem = ({photo}) => {
  return (
    <div className="image-container">
      <Link to={`/photos/${photo.id}`}>
        <Image publicId={photo.img_url} cloudName="shuttr" >
          <Transformation width="1000" crop="scale" />
        </Image>
      </Link>
    </div>
  );
};

export default PhotoItem;
