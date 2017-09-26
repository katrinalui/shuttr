import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { requestUserAlbums } from '../../actions/album_actions';
import { selectAllUserAlbums } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  albums: selectAllUserAlbums(state),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestUserAlbums: (userId) => dispatch(requestUserAlbums(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
