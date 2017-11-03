import React from 'react';
import LoadingSpinner from '../loading_spinner';
import PhotoItem from '../photos/photo_item';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  componentWillMount() {
    this.props.requestAlbum(this.props.match.params.albumId);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(newProps.match.params.albumId);
    }
  }

  render() {
    const { album, photos, loading, currentUser } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (!album) { return <div></div>; }

    const getParent = () => {
      return document.querySelector('.body');
    };

    let editButton = <div></div>;

    if (currentUser.id === album.owner_id) {
      editButton = (
        <div className="album-edit-bar">
          <Link to={`/albums/${album.id}/edit`}>
            <button id="edit-menu-button" onClick={this.openModal}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      );
    }

    const photoItems = photos.map((photo, i) => (
      <PhotoItem key={i} photo={photo} />
    ));

    let divStyle = {
      backgroundImage: `url(http://res.cloudinary.com/shuttr/image/upload/v1506372551/${album.cover_photo_url})`
    };

    if (!album.cover_photo_url) {
      divStyle = {
        backgroundColor: 'gray'
      };
    }

    return (
      <div className="album-show">
        <div className="album-info" style={divStyle}>
          <div className="album-info-overlay">
            {editButton}
            <div className="album-text">
              <div className="album-title-desc">
                <h1>{album.title}</h1>
                <p>{album.description}</p>
              </div>
              <h3>
                By: <Link to={`/users/${album.owner_id}/photos`}>
                {album.owner_username}
                </Link>
              </h3>
            </div>
          </div>
        </div>
        <div className="album-photos">
          { photoItems }
        </div>
      </div>
    );
  }
}

export default AlbumShow;
