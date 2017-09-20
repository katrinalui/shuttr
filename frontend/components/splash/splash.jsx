import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.loginDemo = this.loginDemo.bind(this);
  }

  loginDemo() {
    const demoUser = {username: 'Demo', password: 'password'};
    this.props.login(demoUser);
  }

  render() {
    return (
      <div className="splash-img">
        <h1>Find your inspiration.</h1>
        <button onClick={this.loginDemo}>Demo</button>
      </div>
    );
  }
}

export default Splash;
