import React from 'react';
import PhotoItem from './photo_item';
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

  render() {
    const { photos, loading } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (photos.length === 0) { return <div></div>; }

    // Need to refactor class names for styling!
    return (
      <div className="album-show">
        <div className="album-index-bar">
          <div className="left-box" />
          <div className="album-owner">
            <Image publicId={photos[0].owner_avatar} cloudName="shuttr" >
              <Transformation width="200" height="200" crop="thumb" />
            </Image>
            <h2>{ photos[0].owner }</h2>
          </div>

          <div className="right-box">
            <Link to={`/users/${photos[0].owner_id}/albums`}>Albums</Link>
          </div>
        </div>

        <div className="album-photos">
          { photos.map(photo =>
            <PhotoItem key={photo.id} photo={photo}/>
          ) }
        </div>
      </div>
    );
  }
}

export default PhotoUserIndex;
