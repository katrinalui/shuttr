import React from 'react';
import LoadingSpinner from '../loading_spinner';
import { Image, Transformation } from 'cloudinary-react';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isFirstRender: true
    };
  }

  componentWillMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
  }

  componentDidMount() {
    this.setState({ isFirstRender: false });
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
    }
  }

  render() {
    const { photo, loading } = this.props;

    if (loading || this.state.isFirstRender) {
      return (
        <LoadingSpinner />
      );
    } else {
      return (
        <div className="photo-show">
          <div className="photo-show-img">
            <Image publicId={photo.img_url} cloudName="shuttr" >
              <Transformation width="1000" crop="scale" />
            </Image>
          </div>
          <div className="photo-info">
            <div className="photo-info-left">
              <a>
                <Image publicId={photo.owner_avatar}
                  cloudName="shuttr"
                  className="avatar"
                  >
                  <Transformation width="100" height="100" crop="thumb" />
                </Image>
              </a>
              <span className="photo-text">
                <h2>{ photo.title }</h2>
                <p>{ photo.description }</p>
              </span>
            </div>
            <div className="photo-info-right">
              Posted on { photo.post_date }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default PhotoShow;
