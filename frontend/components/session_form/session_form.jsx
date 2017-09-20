import React from 'react';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modalIsOpen: false,
      formType: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/home');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formType === "Sign Up") {
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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
      formType: "",
      username: "",
      password: ""
    });
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="session-form-container">
        <nav className="signup-login">
          <button onClick={() => this.openForm("Log In")}>Log In</button>
          <button onClick={() => this.openForm("Sign Up")}>Sign Up</button>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          >
          <button onClick={() => this.closeForm()}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>

          <div className="session-form-box">
            {this.state.formType}
            {this.renderErrors()}
            <form className="session-form" onSubmit={this.handleSubmit}>
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Username"
              />
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
              <br />
              <input type="submit"
                value={this.state.formType}
              />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;
