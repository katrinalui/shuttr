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
    if (this.props.currentUser.id === this.props.photo.owner_id) {
      this.setState({ deleteClass: true });
    }
  }

  onMouseLeave() {
    this.setState({ deleteClass: false });
  }

  render() {
    const { tag, photo, removeTag } = this.props;
    let tagName = tag.name;
    if (tagName.length > 25) tagName = `${tagName.substr(0, 25)}...`;

    return (
      <div className="tag-item"
           onMouseEnter={this.onMouseEnter.bind(this)}
           onMouseLeave={this.onMouseLeave.bind(this)}>
        <Link to={`/tags/${tag.id}`}>{tagName}</Link>
        <span className={ this.state.deleteClass ? "tag-delete show" : "tag-delete hidden"}>
          <button style={{ marginLeft: 5 }} onClick={() => removeTag(photo.id, tag)}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </span>
      </div>
    );
  }
}

export default TagItem;
