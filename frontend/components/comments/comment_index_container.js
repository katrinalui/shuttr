import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { requestPhotoComments, editComment, destroyComment } from '../../actions/comment_actions';

const mapStateToProps = state => ({
  comments: state.entities.comments,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestPhotoComments: () => dispatch(requestPhotoComments())
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
