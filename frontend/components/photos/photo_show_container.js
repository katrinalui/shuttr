import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto, destroyPhoto } from '../../actions/photo_actions';
import { selectAllUserAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  photo: state.entities.photos[ownProps.match.params.photoId],
  albums: selectAllUserAlbums(state),
  loading: state.ui.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: photoId => dispatch(requestPhoto(photoId)),
  destroyPhoto: photoId => dispatch(destroyPhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
