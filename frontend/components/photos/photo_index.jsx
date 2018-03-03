import React from 'react';
import PhotoIndexItem from './photo_index_item';
import LoadingSpinner from '../loading_spinner';
import { ProtectedRoute } from '../../util/route_util';

class PhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPhotos();
    document.body.scrollTop = 0;
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
            { photos.map(photo =>
              <PhotoIndexItem key={photo.id} photo={photo}/>
            ) }
          </div>
        </div>
      );
    }
  }
}

export default PhotoIndex;
