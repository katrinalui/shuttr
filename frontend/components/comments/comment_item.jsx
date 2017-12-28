import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';
import { destroyComment } from '../../actions/comment_actions';

class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    const { comment, destroyComment } = this.props;

    destroyComment(comment.id);
  }

  render() {
    const { comment, currentUser } = this.props;

    return (
      <div className="comment-item">
        <Link to={`/users/${comment.author_id}/photos`}>
          <Image publicId={comment.author_img_url} cloudName="shuttr" >
            <Transformation width="100" height="100" crop="thumb" />
          </Image>
        </Link>

        <div className="comment-text">
          <div className="comment-header">
            <Link to={`/users/${comment.author_id}/photos`}>{comment.author_username}</Link>
            <span className="posted-time-ago">{ comment.posted_time_ago }</span>
            { currentUser.id === comment.author_id && <span className="delete-icon" onClick={this.onDelete}>x</span> }
          </div>
          <p className="comment-body">{ comment.body }</p>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  destroyComment: commentId => dispatch(destroyComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
