import React from 'react';
import { Link } from 'react-router-dom';

class TagItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteClass: false
    };
  }

  onMouseEnter() {
    this.setState({ deleteClass: true });
  }

  onMouseLeave() {
    this.setState({ deleteClass: false });
  }

  render() {
    const { tag, photoId, removeTag } = this.props;
    let tagName = tag.name;
    if (tagName.length > 25) tagName = `${tagName.substr(0, 25)}...`;

    return (
      <div className="tag-item"
           onMouseEnter={this.onMouseEnter.bind(this)}
           onMouseLeave={this.onMouseLeave.bind(this)}>
        <Link to={`/tags/${tag.id}`}>{tagName}</Link>
        <span className={ this.state.deleteClass ? "tag-delete show" : "tag-delete hidden"}>
          <button style={{ marginLeft: 5 }} onClick={() => removeTag(photoId, tag)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    );
  }
}

export default TagItem;
