import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';
import AlbumReducer from './album_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer,
  albums: AlbumReducer
});

export default EntitiesReducer;
