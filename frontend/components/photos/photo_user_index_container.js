import { connect } from 'react-redux';
import PhotoUserIndex from './photo_user_index';
import { requestUserPhotos } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';
import { requestUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  photos: selectAllPhotos(state),
  loading: state.ui.loading,
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  requestUserPhotos: (userId) => dispatch(requestUserPhotos(userId)),
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoUserIndex);
