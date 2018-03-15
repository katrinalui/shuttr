import React from 'react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import LoadingSpinner from '../loading_spinner';
import PhotoItem from '../photos/photo_item';

class TaggedPhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeaderText = this.renderHeaderText.bind(this);
  }

  componentWillMount() {
    this.props.requestTagPhotos(this.props.match.params.tagName);
    this.props.requestTag(this.props.match.params.tagName);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.tagName !== newProps.match.params.tagName) {
      this.props.requestTagPhotos(newProps.match.params.tagName);
      this.props.requestTag(newProps.match.params.tagName);
    }
  }

  renderHeaderText() {
    const { photos, tag } = this.props;
    return photos.length === 0 ? `No photos tagged with "${tag.name}"` : `Recently tagged — ${tag.name}`;
  }

  render() {
    const { tag, photos, loading } = this.props;

    const photoItems = (
      <MasonryInfiniteScroller
        className="masonry"
        sizes={[ { columns: 1, gutter: 10 },
          { mq: '768px', columns: 2, gutter: 5 },
          { mq: '1024px', columns: 3, gutter: 5 },
          { mq: '1700px', columns: 4, gutter: 5 }]}>
        { photos.map(photo =>
          <PhotoItem key={photo.id} photo={photo} width={300}/>
        )}
      </MasonryInfiniteScroller>
    );

    return (
      loading || !tag
      ? <LoadingSpinner />
      : <div className="tagged-photos-container">
          <h2>{ this.renderHeaderText() }</h2>
          <div className="photo-gallery-container">
            { photoItems }
          </div>
        </div>
    );
  }
}

export default TaggedPhotoIndex;
