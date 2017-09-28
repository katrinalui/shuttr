import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createComment: (comment, photoId) => dispatch(createComment(comment, photoId))
});

export default connect(null, mapDispatchToProps)(CommentForm);
