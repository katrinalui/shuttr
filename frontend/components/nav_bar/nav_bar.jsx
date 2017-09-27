import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import UserMenu from './user_menu';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    const { currentUser, logout } = this.props;

    const getParent = () => {
      return document.querySelector('#nav-bar-avatar');
    };

    return (
      <div className="dashboard-nav">
        <Link to="/home">
          <Image publicId="shuttr_logo_name.png"
            cloudName="shuttr"
            className="logo"
          />
        </Link>
        <div className="user-buttons">
          <a id="nav-bar-avatar" onClick={this.toggleModal}>
            <Image publicId={currentUser.img_url}
              cloudName="shuttr"
              >
              <Transformation height="100" width="100" crop="thumb" />
            </Image>
          </a>

          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Modal"
            onRequestClose={this.toggleModal}
            parentSelector={getParent}
            className={{
              base: 'user-menu-modal'
            }}
            overlayClassName={{
              base: 'user-menu-overlay'
            }}
            >

            <UserMenu
              currentUser={ this.props.currentUser }
              logout={this.props.logout}
            />
          </Modal>

          <Link to="/photos/upload">
            <i className="fa fa-cloud-upload" aria-hidden="true"></i>
          </Link>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default NavBar;
