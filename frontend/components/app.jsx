import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <nav className="navbar">
      <AuthRoute path="/" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={NavBarContainer}/>
    </nav>

    <main className="body">
        <AuthRoute path="/" component={SplashContainer} />
        <ProtectedRoute path="/home" />
    </main>
  </div>
);

export default App;
