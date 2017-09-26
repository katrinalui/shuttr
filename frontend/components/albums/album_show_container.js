import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { requestAlbum } from '../../actions/album_actions';
import { selectAllPhotos } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  photos: selectAllPhotos(state),
  loading: state.ui.loading,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestAlbum: albumId => dispatch(requestAlbum(albumId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
