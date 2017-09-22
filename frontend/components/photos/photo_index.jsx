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
        <div className="homepage">
          <h2>All Activity</h2>

          <div className="photos-home-index">
            { photos.reverse().map(photo =>
              <PhotoIndexItem key={photo.id} photo={photo}/>
            ) }
          </div>
        </div>
      );
    }
  }
}

export default PhotoIndex;
