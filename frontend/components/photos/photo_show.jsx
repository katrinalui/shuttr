import React from 'react';
import LoadingSpinner from '../loading_spinner';
import PhotoEditMenu from './photo_edit_menu';
import { Image, Transformation } from 'cloudinary-react';
import Modal from 'react-modal';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    this.props.requestPhoto(this.props.match.params.photoId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.requestPhoto(newProps.match.params.photoId);
    }
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const { photo, loading, currentUser } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (!photo) { return <div></div>; }

    const getParent = () => {
      return document.querySelector('#edit-menu-button');
    };

    let editButton = <div></div>;

    if (currentUser.id === photo.owner_id) {
      editButton = (
        <div className="photo-edit-bar">
          <button id="edit-menu-button" onClick={this.openModal}>
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
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

export default PhotoShow;
