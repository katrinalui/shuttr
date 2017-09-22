import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PhotoIndexContainer from './photos/photo_index_container';

const App = () => (
  <div>
    <nav className="navbar">
      <ProtectedRoute path="/home" component={NavBarContainer}/>
    </nav>

    <main className="body">
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/home" component={PhotoIndexContainer} />
    </main>
  </div>
);

export default App;
