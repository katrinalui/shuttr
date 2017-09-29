import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import {
  requestPhoto,
  destroyPhoto,
  editAlbumMembership,
  addTag,
  removeTag
} from '../../actions/photo_actions';
import { requestUserAlbums } from '../../actions/album_actions';
import { createComment } from '../../actions/comment_actions';
import { selectAllUserAlbums, selectPhotoComments, selectPhotoTags } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId],
  albums: state.entities.albums,
  currentUserAlbums: selectAllUserAlbums(state, state.session.currentUser.id),
  comments: selectPhotoComments(state, ownProps.match.params.photoId),
  tags: selectPhotoTags(state, ownProps.match.params.photoId),
  loading: state.ui.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: photoId => dispatch(requestPhoto(photoId)),
  destroyPhoto: photoId => dispatch(destroyPhoto(photoId)),
  requestUserAlbums: userId => dispatch(requestUserAlbums(userId)),
  editAlbumMembership: (photoId, albums) => dispatch(editAlbumMembership(photoId, albums)),
  createComment: (comment, photoId) => dispatch(createComment(comment, photoId)),
  addTag: (photoId, tag) => dispatch(addTag(photoId, tag)),
  removeTag: (photoId, tag) => dispatch(removeTag(photoId, tag))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhotoShow));
