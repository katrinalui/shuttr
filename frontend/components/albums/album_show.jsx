import React from 'react';
import LoadingSpinner from '../loading_spinner';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class AlbumShow extends React.Component {
  componentWillMount() {
    this.props.requestAlbum(this.props.match.params.albumId);
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

    let editButton = <div></div>;

    const getParent = () => {
      return document.querySelector('.body');
    };

    if (currentUser.id === album.owner_id) {
      editButton = (
        <div className="album-edit-bar">
          <button id="edit-menu-button" onClick={this.openModal}>
            <i className="fa fa-pencil" aria-hidden="true"></i>
            <Modal
              isOpen={this.state.modalIsOpen}
              contentLabel="Modal"
              onRequestClose={this.closeModal}
              parentSelector={getParent}
              className={{
                base: 'edit-menu-modal'
              }}
              overlayClassName={{
                base: 'edit-menu-overlay'
              }}
              >
              // render album form here
            </Modal>
          </button>
        </div>
      );
    }

    const photoItems = photos.map(photo => (
      <div className="image-container">
        <Link to={`/photos/${photo.id}`}>
          <Image publicId={photo.img_url} cloudName="shuttr" >
            <Transformation width="600" crop="scale" />
          </Image>
        </Link>
      </div>
    ));

    const divStyle = {
      backgroundImage: `url(http://res.cloudinary.com/shuttr/image/upload/v1506372551/${album.cover_photo_url})`
    };

    return (
      <div className="album-show">
        <div className="album-info" style={divStyle}>
          {editButton}
          <h1>{album.title}</h1>
          <p>{album.description}</p>
          <h3>By: {album.owner_username}</h3>
        </div>
        <div className="album-photos">
          { photoItems }
        </div>
      </div>
    );
  }
}

export default AlbumShow;
