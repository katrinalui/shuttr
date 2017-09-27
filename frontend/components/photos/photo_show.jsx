import React from 'react';
import LoadingSpinner from '../loading_spinner';
import PhotoEditMenu from './photo_edit_menu';
import AlbumSelectForm from '../albums/album_select_form';
import { Image, Transformation } from 'cloudinary-react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalIsOpen: false,
      albumModalIsOpen: false
    };
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleAlbumModal = this.toggleAlbumModal.bind(this);
  }

  componentWillMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
    }
  }

  toggleEditModal() {
    this.setState({
      editModalIsOpen: !this.state.editModalIsOpen
    });
  }

  toggleAlbumModal() {
    this.setState({
      albumModalIsOpen: !this.state.albumModalIsOpen
    });
  }

  render() {
    const { photo, albums, loading, currentUser } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (!photo) { return <div></div>; }

    const getEditParent = () => {
      return document.querySelector('#edit-menu-button');
    };

    let editButton = <div></div>;

    if (currentUser.id === photo.owner_id) {
      editButton = (
        <div className="photo-edit-bar">
          <button id="edit-menu-button" onClick={this.toggleEditModal}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            <Modal
              isOpen={this.state.editModalIsOpen}
              contentLabel="Modal"
              onRequestClose={this.toggleEditModal}
              parentSelector={getEditParent}
              className={{
                base: 'edit-menu-modal'
              }}
              overlayClassName={{
                base: 'edit-menu-overlay'
              }}
              >
              <PhotoEditMenu
                photoId={photo.id}
                destroyPhoto={this.props.destroyPhoto}
                history={this.props.history}
                />
            </Modal>
          </button>
        </div>
      );
    }

    let addAlbumLink = <div></div>;

    if (currentUser.id === photo.owner_id) {
      addAlbumLink = (
        <a onClick={this.toggleAlbumModal}>Add to album
          <Modal
            isOpen={this.state.albumModalIsOpen}
            contentLabel="Modal"
            onRequestClose={this.toggleAlbumModal}
            className={{
              base: 'album-select-modal'
            }}
            overlayClassName={{
              base: 'album-select-overlay'
            }}
            >
            <AlbumSelectForm
              albums={albums}
              photo={photo}
              />
          </Modal>
        </a>
      );
    }

    const albumListItems = albums.map(album => (
      <Link key={album.id} to={`/albums/${album.id}`}>{album.title}</Link>
    ));

    let albumHeader = <h3>{`This photo is in ${albums.length} albums`}</h3>;

    if (albums.length === 1) {
      albumHeader = <h3>{`This photo is in 1 album`}</h3>;
    } else if (albums.length === 0) {
      albumHeader = <h3>This photo is currently not in any albums</h3>;
    }

    return (
      <div className="photo-show">
        <div className="photo-show-img">
          <Image publicId={photo.img_url} cloudName="shuttr" >
            <Transformation width="1000" crop="scale" />
          </Image>
          { editButton }
        </div>

        <div className="photo-info">
          <div className="photo-info-left">
            <Link to={`/users/${photo.owner_id}/photos`}>
              <Image publicId={photo.owner_avatar}
                cloudName="shuttr"
                className="avatar"
                >
                <Transformation width="100" height="100" crop="thumb" />
              </Image>
            </Link>
            <span className="photo-text">
              <h2>{ photo.title }</h2>
              <p>{ photo.description }</p>
            </span>
          </div>
          <div className="photo-info-right">
            Posted on { photo.post_date }
          </div>
        </div>

        <div className="photo-show-albums">
          { albumHeader }
          <ul>
            {albumListItems}
          </ul>
          { addAlbumLink }
        </div>
      </div>
    );
  }
}

export default PhotoShow;
