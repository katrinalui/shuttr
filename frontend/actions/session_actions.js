import { postUser, postSession, deleteSession } from '../util/session_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signup = user => dispatch => (
  postUser(user)
    .then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const login = user => dispatch => (
  postSession(user)
    .then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
      dispatch(clearErrors());
    },
    errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const logout = () => dispatch => (
  deleteSession()
    .then(() => dispatch(receiveCurrentUser(null)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
);
