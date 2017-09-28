import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { requestUserAlbums } from '../../actions/album_actions';
import { requestUser } from '../../actions/user_actions';
import values from 'lodash/values';

const mapStateToProps = (state, ownProps) => ({
  albums: values(state.entities.albums),
  loading: state.ui.loading,
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  requestUserAlbums: (userId) => dispatch(requestUserAlbums(userId)),
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
