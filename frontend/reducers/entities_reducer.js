import { combineReducers } from 'redux';
import PhotoReducer from './photo_reducer';

const EntitiesReducer = combineReducers({
  photos: PhotoReducer
});

export default EntitiesReducer;
