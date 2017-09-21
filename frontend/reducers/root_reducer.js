import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import ErrorReducer from './error_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session: SessionReducer,
  errors: ErrorReducer,
  ui: UiReducer
});

export default RootReducer;
