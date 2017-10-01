import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import onClickOutside from 'react-onclickoutside';
import PhotoDeleteWarning from './photo_delete_warning';

class PhotoEditMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalIsOpen: false
    };
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleDeleteModal(e) {
    e.preventDefault();
    this.setState(prevState => ({
      deleteModalIsOpen: !prevState.deleteModalIsOpen
    }));
  }

  handleDelete() {
    this.props.destroyPhoto(this.props.photoId)
      .then(() => this.props.history.push('/home'));
  }

  handleClickOutside() {
    this.props.closeEditModal();
  }

  render() {
    const getParent = () => {
      return document.querySelector('.body');
    };

    return (
      <div className="photo-edit-menu">
        <Link to={`/photos/${this.props.photoId}/edit`}>Edit</Link>
        <a onClick={this.toggleDeleteModal}>Delete</a>
        <Modal
          isOpen={this.state.deleteModalIsOpen}
          contentLabel="Delete Modal"
          onRequestClose={this.toggleDeleteModal}
          parentSelector={getParent}
          className={{
            base: 'delete-menu-modal'
          }}
          overlayClassName={{
            base: 'delete-menu-overlay'
          }}>

          <PhotoDeleteWarning
            toggleDeleteModal={this.toggleDeleteModal}
            destroyPhoto={this.props.destroyPhoto}
            history={this.props.history}
            photoId={this.props.photoId}
          />

        </Modal>

      </div>
    );
  }
}

export default onClickOutside(PhotoEditMenu);
