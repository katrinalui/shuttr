import {
  getPhotos,
  getUserPhotos,
  getPhoto,
  postPhoto,
  patchPhoto,
  deletePhoto
} from '../util/photo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const START_LOADING_PHOTOS = "START_LOADING_PHOTOS";

export const startLoadingPhotos = () => ({
  type: START_LOADING_PHOTOS
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const requestAllPhotos = () => dispatch => {
  dispatch(startLoadingPhotos());
  return getPhotos().then(photos => dispatch(receivePhotos(photos)));
};

export const requestUserPhotos = userId => dispatch => {
  dispatch(startLoadingPhotos());
  return getUserPhotos(userId).then(photos => dispatch(receivePhotos(photos)));
};

export const requestPhoto = photoId => dispatch => (
  getPhoto(photoId).then(photo => dispatch(receivePhoto(photo)))
);

export const createPhoto = photo => dispatch => (
  postPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const editPhoto = photo => dispatch => (
  patchPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const destroyPhoto = photoId => dispatch => (
  deletePhoto(photoId).then(photo => dispatch(removePhoto(photo)))
);
