import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestAllPhotos();
  }

  render() {
    const { photos, loading } = this.props;

    if (loading) {
      return (
        <div className="loading-spinner">
          <i className="fa fa-spinner fa-spin" />
        </div>
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
