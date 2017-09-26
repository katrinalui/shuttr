import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import { START_LOADING } from '../actions/loading_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

const _initialState = {
  loading: false
};

const UiReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_PHOTO:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ALBUMS:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ALBUM:
      return Object.assign({}, state, { loading: false });
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { loading: false });
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    default:
      return state;
  }
};

export default UiReducer;
