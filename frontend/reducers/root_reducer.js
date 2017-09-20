import { combineReducers } from 'redux';
import ErrorReducer from './error_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer
});

export default RootReducer;
