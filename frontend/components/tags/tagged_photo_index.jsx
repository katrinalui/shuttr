import React from 'react';
import LoadingSpinner from '../loading_spinner';
import PhotoItem from '../photos/photo_item';

class TaggedPhotoIndex extends React.Component {
  componentWillMount() {
    this.props.requestTagPhotos(this.props.match.params.tagId);
    this.props.requestTag(this.props.match.params.tagId);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.tagId !== newProps.match.params.tagId) {
      this.props.requestTagPhotos(newProps.match.params.tagId);
      this.props.requestTag(newProps.match.params.tagId);
    }
  }

  render() {
    const { tag, photos, loading } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (!tag) { return <div></div>; }

    if (photos.length === 0) {
      return <h2>{`No photos tagged with ${tag.name}`}</h2>;
    }

    const photoItems = photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo} />
    ));

    return (
      <div className="album-show">
        <h2>{ `Recently tagged — ${tag.name}` }</h2>
        <div className="album-photos">
          { photoItems }
        </div>
      </div>
    );
  }
}

export default TaggedPhotoIndex;
