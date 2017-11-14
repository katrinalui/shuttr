import React from 'react';
import PhotoItem from './photo_item';
import SubNav from '../users/subnav';
import LoadingSpinner from '../loading_spinner';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

class PhotoUserIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserPhotos(this.props.match.params.userId);
    this.props.requestUser(this.props.match.params.userId);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUserPhotos(newProps.match.params.userId);
      this.props.requestUser(newProps.match.params.userId);
    }
  }

  pageName() {
    const path = this.props.match.path;
    const i = path.lastIndexOf('/');
    return path.substring(i + 1);
  }

  render() {
    const { photos, loading, user } = this.props;

    if (loading) {
      return (
        <div className="photo-gallery-container">
          <LoadingSpinner />
        </div>
      );
    }

    if (!user) { return <div></div>; }

    let photoIndex = <h2>Nothing to see here.</h2>;
    if (photos.length > 0) {
      photoIndex = (
        <div className="photo-gallery">
          { photos.map(photo =>
          <PhotoItem key={photo.id} photo={photo}/>
          )}
        </div>
      );
    }

    // Need to refactor class names for styling!
    return (
      <div className="photo-gallery-container">
        { photoIndex }
      </div>
    );
  }
}

export default PhotoUserIndex;
