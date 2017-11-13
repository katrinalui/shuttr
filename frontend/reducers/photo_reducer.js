import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  const stateCopy = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, action.photos);
    case RECEIVE_PHOTO:
      const photo = action.payload.photo;
      photo.albumIds = action.payload.albums.map(album => album.id);
      photo.commentIds = action.payload.comments.map(comment => comment.id);
      photo.tags = action.payload.tags.map(tag => tag.name);
      return Object.assign({}, state, { [photo.id]: photo });
    case REMOVE_PHOTO:
      delete stateCopy[action.photo.id];
      return stateCopy;
    case RECEIVE_ALBUM:
      const photos = action.payload.photos.reduce((acc, photo) => {
        acc[photo.id] = photo;
        return acc;
      }, {});
      return Object.assign({}, photos);
    default:
      return state;
  }
};

export default PhotoReducer;
