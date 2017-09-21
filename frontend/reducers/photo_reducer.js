import {
  RECEIVE_PHOTOS,
  RECEIVE_PHOTO,
  REMOVE_PHOTO
} from '../actions/photo_actions';

const PhotoReducer = (state = {}, action) => {
  Object.freeze(state);
  const stateCopy = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, action.photos);
    case RECEIVE_PHOTO:
      stateCopy[action.photo.id] = action.photo;
      return stateCopy;
    case REMOVE_PHOTO:
      delete stateCopy[action.photo.id];
      return stateCopy;
    default:
      return state;
  }
};

export default PhotoReducer;
