import {
  RECEIVE_ALBUMS,
  RECEIVE_ALBUM,
  REMOVE_ALBUM
} from '../actions/album_actions';

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
    default:
      return state;
  }
};

export default AlbumReducer;
