import React from 'react';
import { Link } from 'react-router-dom';

const TagItem = ({ tag }) => {
  return (
    <div className="tag-item">
      <Link to={`/tags/${tag.id}`}>{tag.name}</Link>
    </div>
  );
};

export default TagItem;
