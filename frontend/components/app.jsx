import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <nav className="navbar">
      <Route exact path="/" component={SessionFormContainer} />
      <Route path="/home" />
    </nav>

    <main className="body">
        <Route exact path="/" component={SplashContainer} />
        <Route path="/home" />
    </main>
  </div>
);

export default App;
