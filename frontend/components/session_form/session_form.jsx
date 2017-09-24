import React from 'react';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      formType: props.formType
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFormLink = this.toggleFormLink.bind(this);
    this.toggleForm = this.toggleForm.bind(this);

    if (props.demoStart) {
      this.loginDemo();
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

  toggleFormLink() {
    if (this.state.formType === "Sign Up") {
      return (
        <a onClick={this.toggleForm}>Already have an account? Log in</a>
      );
    } else {
      return (
        <a onClick={this.toggleForm}>Don't have an account? Sign up</a>
      );
    }
  }

  toggleForm() {
    this.props.clearErrors();

    if (this.state.formType === "Sign Up") {
      this.setState({ formType: "Log In" });
    } else {
      this.setState({ formType: "Sign Up" });
    }
  }

  loginDemo() {
    const demoUsername = 'guest'.split('');
    const demoPassword= 'password'.split('');

    const intervalId = setInterval(() => {
      if (demoUsername.length > 0) {
        this.setState({
          username: this.state.username + demoUsername.shift()
        });
      } else if (demoPassword.length > 0) {
        this.setState({
          password: this.state.password + demoPassword.shift()
        });
      } else {
        clearInterval(intervalId);
        this.props.login(this.state);
      }
    }, 100);
  }

  render() {
    return (
      <div className="session-form-box">
        <h2>{this.state.formType}</h2>
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
        {this.toggleFormLink()}
      </div>
    );
  }
}

export default SessionForm;
