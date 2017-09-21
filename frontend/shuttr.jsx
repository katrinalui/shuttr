import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// For testing:
import { getPhotos, getUserPhotos, getPhoto, postPhoto, patchPhoto, deletePhoto  } from './util/photo_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store } />, root);
});

// For testing:
window.getPhotos = getPhotos;
window.getUserPhotos = getUserPhotos;
window.getPhoto = getPhoto;
window.postPhoto = postPhoto;
window.patchPhoto = patchPhoto;
window.deletePhoto = deletePhoto;
