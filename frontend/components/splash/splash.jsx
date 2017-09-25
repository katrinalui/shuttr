import React from 'react';
import { AuthRoute } from '../../util/route_util';
import SessionFormContainer from '../session_form/session_form_container';
import Modal from 'react-modal';
import { Image } from 'cloudinary-react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      formType: "",
      demoStart: false
    };
    this.handleDemoClick = this.handleDemoClick.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm(formType) {
    this.setState({
      modalIsOpen: true,
      formType
    });
  }

  closeForm() {
    this.setState({
      modalIsOpen: false,
      formType: ""
    });
    this.props.clearErrors();
  }

  handleDemoClick() {
    this.setState({
      modalIsOpen: true,
      formType: "Log In",
      demoStart: true
    });
  }

  render() {
    return (
      <div className="hero-img">
        <nav className="splash-nav">
          <Image publicId="shuttr_logo_name.png"
            cloudName="shuttr"
            className="logo"
          />

          <div className="signup-login">
            <button onClick={() => this.openForm("Log In")}>Log In</button>
            <button onClick={() => this.openForm("Sign Up")}>Sign Up</button>
          </div>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeForm}
          className={{
            base: 'session-form-modal'
          }}
          overlayClassName={{
            base: 'session-form-overlay'
          }}
          >
          <button onClick={() => this.closeForm()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <SessionFormContainer
            formType={ this.state.formType }
            demoStart={this.state.demoStart}
          />
        </Modal>

        <div className="hero-text">
          <h1>Share the world with your photos.</h1>
          <button onClick={this.handleDemoClick}>Demo</button>
        </div>
      </div>
    );
  }
}

export default Splash;
