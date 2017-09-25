import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PhotoFormContainer from './photo_form_container';

class PhotoEditMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      editModalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete() {
    this.props.destroyPhoto(this.props.photoId)
      .then(() => this.props.history.push('/home'));
  }

  render() {
    const getParent = () => {
      return document.querySelector('.body');
    };

    return (
      <div className="photo-edit-menu">
        <Link to={`/photos/${this.props.photoId}/edit`}>Edit</Link>
        <a onClick={this.openModal}>Delete</a>


        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          parentSelector={getParent}
          className={{
            base: 'delete-menu-modal'
          }}
          overlayClassName={{
            base: 'delete-menu-overlay'
          }}>

          <p>Are you sure you want to delete this photo?</p>
          <div className="delete-buttons">
            <button onClick={this.closeModal}>Cancel</button>
            <button
              onClick={this.handleDelete}
              className="delete-button">
              Delete
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

// <Modal
//   isOpen={this.state.editModalIsOpen}
//   contentLabel="Edit Modal"
//   onRequestClose={this.closeEditModal}
//   className={{
//     base: 'edit-menu-modal'
//   }}
//   overlayClassName={{
//     base: 'edit-menu-overlay'
//   }}>
//
//   <PhotoFormContainer formType="edit"/>
// </Modal>
export default PhotoEditMenu;
