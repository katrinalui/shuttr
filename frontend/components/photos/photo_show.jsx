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
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.toggleAlbumModal = this.toggleAlbumModal.bind(this);
  }

  componentWillMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
    this.props.requestUserAlbums(this.props.currentUser.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
      this.props.requestUserAlbums(this.props.currentUser.id);
    }
  }

  openEditModal() {
    this.setState({
      editModalIsOpen: true
    });
  }

  closeEditModal() {
    this.setState({
      editModalIsOpen: false
    });
  }

  toggleAlbumModal() {
    this.setState({
      albumModalIsOpen: !this.state.albumModalIsOpen
    });
  }

  editModal() {
    const { photo } = this.props;

    const getEditParent = () => {
      return document.querySelector('#edit-menu-button');
    };

    return (
      <Modal
        isOpen={this.state.editModalIsOpen}
        contentLabel="Edit Modal"
        parentSelector={getEditParent}
        className={{
          base: 'edit-menu-modal'
        }}
        overlayClassName={{
          base: 'edit-menu-overlay'
        }}
        >
        <button onClick={this.closeEditModal}>X</button>

        <PhotoEditMenu
          photoId={photo.id}
          destroyPhoto={this.props.destroyPhoto}
          history={this.props.history}
          />
      </Modal>
    );
  }

  render() {
    console.log(this.props);
    const { photo, albums, currentUserAlbums, loading, currentUser } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (!photo || !photo.post_date) { return <div></div>; }

    let editButton = <div></div>;

    if (currentUser.id === photo.owner_id) {
      editButton = (
        <div className="photo-edit-bar">
          <button id="edit-menu-button" onClick={this.openEditModal}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </button>
        </div>
      );
    }

    let addAlbumLink = <div></div>;

    if (currentUser.id === photo.owner_id) {
      addAlbumLink = (
        <div>
          <a onClick={this.toggleAlbumModal}>Add to album</a>

          <Modal
            isOpen={this.state.albumModalIsOpen}
            contentLabel="Album Modal"
            onRequestClose={this.toggleAlbumModal}
            className={{
              base: 'album-select-modal'
            }}
            overlayClassName={{
              base: 'album-select-overlay'
            }}
            >
            <button onClick={this.toggleAlbumModal}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>

            <AlbumSelectForm
              albums={currentUserAlbums}
              albumIds={photo.albumIds}
              photoId={photo.id}
              editAlbumMembership={this.props.editAlbumMembership}
              toggleAlbumModal={this.toggleAlbumModal}
              />
          </Modal>
        </div>
      );
    }

    let albumListItems = [];
    let albumCount = 0;
    if (photo.albumIds) {
      albumListItems = photo.albumIds.map(id => (
        <Link key={id} to={`/albums/${id}`}>
          <div className="album-list-item">
            <Image publicId={albums[id].cover_photo_url} cloudName="shuttr" >
              <Transformation width="45" height="45" crop="thumb" />
            </Image>
            {albums[id].title}
          </div>
        </Link>
      ));

      albumCount = photo.albumIds.length;
    }

    let albumHeader = <h3>{`This photo is in ${albumCount} albums`}</h3>;

    if (albumCount === 1) {
      albumHeader = <h3>{`This photo is in 1 album`}</h3>;
    } else if (albumCount === 0 && currentUser.id === photo.owner_id) {
      albumHeader = <h3>This photo is currently not in any albums</h3>;
    } else if (albumCount === 0 && currentUser.id !== photo.owner_id) {
      albumHeader = <div></div>;
    }

    return (
      <div className="photo-show">
        <div className="photo-show-img">
          <Image publicId={photo.img_url} cloudName="shuttr" >
            <Transformation width="1000" crop="scale" />
          </Image>
          { editButton }

        </div>
        { this.editModal() }

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

            <div className="photo-show-albums">
              <div className="photo-album-info">
                { albumHeader }
                { addAlbumLink }
              </div>
              <div className="album-links">
                {albumListItems}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PhotoShow;
