import {
  getUserAlbums,
  getAlbum,
  postAlbum,
  patchAlbum,
  deleteAlbum
} from '../util/album_api_util';

import { startLoading } from './loading_actions';

export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";

export const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});

export const receiveAlbum = payload => ({
  type: RECEIVE_ALBUM,
  payload
});

export const removeAlbum = ({ album }) => ({
  type: REMOVE_ALBUM,
  album
});

export const requestUserAlbums = userId => dispatch => {
  dispatch(startLoading());
  return getUserAlbums(userId).then(albums => dispatch(receiveAlbums(albums)));
};

export const requestAlbum = albumId => dispatch => {
  dispatch(startLoading());
  return getAlbum(albumId).then(album => dispatch(receiveAlbum(album)));
};

export const createAlbum = album => dispatch => (
  postAlbum(album).then(album => dispatch(receiveAlbum(album)))
);

export const editAlbum = album => dispatch => (
  patchAlbum(album).then(album => dispatch(receiveAlbum(album)))
);

export const destroyAlbum = albumId => dispatch => (
  deleteAlbum(albumId).then(album => dispatch(removeAlbum(album)))
);
