import React from 'react';
import PhotoIndexItem from './photo_index_item';
import LoadingSpinner from '../loading_spinner';

class PhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPhotos();
  }

  render() {
    const { photos, loading } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    } else {
      return (
        <div className="photos-home-index">
          { photos.map(photo =>
            <PhotoIndexItem key={photo.id} photo={photo}/>
          ) }
        </div>
      );
    }
  }
}

export default PhotoIndex;
