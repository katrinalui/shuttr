import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import Splash from './splash';

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(null, mapDispatchToProps)(Splash);
