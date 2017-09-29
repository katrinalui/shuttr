import { postTag, getTag } from '../util/tag_api_util';

export const RECEIVE_TAG = "RECEIVE_TAG";

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const requestTag = tagId => dispatch => {
  return getTag(tagId).then(tag => dispatch(receiveTag(tag)));
};

export const createTag = tag => dispatch => (
  postTag(tag).then(tag => dispatch(receiveTag(tag)))
);
