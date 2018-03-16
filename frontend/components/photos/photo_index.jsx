import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
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

    return (
      loading
      ? <LoadingSpinner />
      : <div className="homepage">
          <h2>Recent Photos</h2>

          <div className="photo-gallery-container">
            <MasonryInfiniteScroller
              className="masonry"
              sizes={[ { columns: 1, gutter: 30 },
                { mq: '768px', columns: 2, gutter: 30 },
                { mq: '1024px', columns: 3, gutter: 30 },
                { mq: '1700px', columns: 4, gutter: 30 }]}>
              { photos.map(photo =>
                <PhotoIndexItem key={photo.id} photo={photo} width={320} />
              ) }
            </MasonryInfiniteScroller>
          </div>
        </div>
    );
  }
}

export default PhotoIndex;
