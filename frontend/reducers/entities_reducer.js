import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';
import UserReducer from './user_reducer';
import CommentReducer from './comment_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  albums: AlbumReducer,
  users: UserReducer,
  comments: CommentReducer
});

export default EntitiesReducer;
