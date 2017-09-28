import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto, destroyPhoto, editAlbumMembership } from '../../actions/photo_actions';
import { requestUserAlbums } from '../../actions/album_actions';
import { selectAllUserAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId],
  albums: state.entities.albums,
  currentUserAlbums: selectAllUserAlbums(state, state.session.currentUser.id),
  loading: state.ui.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: photoId => dispatch(requestPhoto(photoId)),
  destroyPhoto: photoId => dispatch(destroyPhoto(photoId)),
  requestUserAlbums: userId => dispatch(requestUserAlbums(userId)),
  editAlbumMembership: (photoId, albums) => dispatch(editAlbumMembership(photoId, albums))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
