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
      <div className="hero-img">
        <div className="hero-text">
          <h1>Share your photos with the world.</h1>
          <button onClick={this.loginDemo}>Demo</button>
        </div>
      </div>
    );
  }
}

export default Splash;
