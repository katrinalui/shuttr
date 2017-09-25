import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import PhotoFormContainer from './photos/photo_form_container';

const App = () => (
  <div>
    <nav className="navbar">
      <ProtectedRoute path="/" component={NavBarContainer}/>
    </nav>

    <main className="body">
      <Switch>
        <AuthRoute exact path="/" component={SplashContainer} />
        <ProtectedRoute path="/home" component={PhotoIndexContainer} />
        <ProtectedRoute path='/photos/upload' component={PhotoFormContainer} />
        <ProtectedRoute path='/photos/:photoId/edit' component={PhotoFormContainer} />
        <ProtectedRoute path='/photos/:photoId' component={PhotoShowContainer}/>
      </Switch>
    </main>
  </div>
);

export default App;
