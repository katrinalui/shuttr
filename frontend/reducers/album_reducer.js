import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/album_actions';
import { RECEIVE_PHOTO } from '../actions/photo_actions';

const AlbumReducer = (state = {}, action) => {
  Object.freeze(state);
  const stateCopy = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALBUMS:
      return Object.assign({}, action.albums);
    case RECEIVE_ALBUM:
      const album = action.payload.album;
      album.photoIds = action.payload.photos.map(photo => photo.id);
      return Object.assign({}, state, { [album.id]: album });
    case REMOVE_ALBUM:
      delete stateCopy[action.album.id];
      return stateCopy;
    case RECEIVE_PHOTO:
      const albums = action.payload.albums.reduce((acc, album) => {
        acc[album.id] = album;
        return acc;
      }, {});
      return Object.assign({}, state, albums);
    default:
      return state;
  }
};

export default AlbumReducer;
