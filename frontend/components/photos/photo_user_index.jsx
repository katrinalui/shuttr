import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import PhotoItem from './photo_item';
import SubNav from '../users/subnav';
import LoadingSpinner from '../loading_spinner';

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

    let photoIndex = <h2>Nothing to see here.</h2>;
    if (photos.length > 0) {
      photoIndex = (
        <MasonryInfiniteScroller
          className="masonry"
          sizes={[ { columns: 1, gutter: 10 },
            { mq: '768px', columns: 2, gutter: 10 },
            { mq: '1024px', columns: 3, gutter: 10 },
            { mq: '1700px', columns: 4, gutter: 10 }]}>
          { photos.map(photo =>
            <PhotoItem key={photo.id} photo={photo} width={320}/>
          )}
        </MasonryInfiniteScroller>
      );
    }

    return (
      <div className="photo-gallery-container">
        { !loading && user ? photoIndex : <LoadingSpinner /> }
      </div>
    );
  }
}

export default PhotoUserIndex;
