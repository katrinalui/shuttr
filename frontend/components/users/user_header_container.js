import {connect} from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserHeader from './user_header';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[ownProps.match.params.userId]
});

const mapDispatchToProps = dispatch => ({
  requestUser: (userId) => dispatch(requestUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
