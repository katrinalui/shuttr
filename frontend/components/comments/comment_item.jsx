import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { Link } from 'react-router-dom';

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <Link to={`/users/${comment.author_id}/photos`}>
        <Image publicId={comment.author_img_url} cloudName="shuttr" >
          <Transformation width="50" height="50" crop="thumb" />
        </Image>
      </Link>

      <div className="comment-text">
        <div className="comment-header">
          <Link to={`/users/${comment.author_id}/photos`}>{comment.author_username}</Link>
          <span className="posted-time-ago">{ comment.posted_time_ago }</span>
        </div>
        <p className="comment-body">{ comment.body }</p>
      </div>

    </div>
  );
};

export default CommentItem;
