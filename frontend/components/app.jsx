import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import PhotoFormContainer from './photos/photo_form_container';
import AlbumShowContainer from './albums/album_show_container';
import AlbumFormContainer from './albums/album_form_container';
import TaggedPhotoIndexContainer from './tags/tagged_photo_index_container';
import UserHeaderContainer from './users/user_header_container';
import Footer from './footer';

const App = () => (
  <div id="wrapper">
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
        <ProtectedRoute path='/users/:userId' component={UserHeaderContainer}/>
        <ProtectedRoute path='/albums/new' component={AlbumFormContainer}/>
        <ProtectedRoute path='/albums/:albumId/edit' component={AlbumFormContainer}/>
        <ProtectedRoute path='/albums/:albumId' component={AlbumShowContainer}/>
        <ProtectedRoute path='/tags/:tagName' component={TaggedPhotoIndexContainer}/>
      </Switch>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
