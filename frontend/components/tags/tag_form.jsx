import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // update() {
  //   // return e => this.setState({
  //   //   body: e.target.value
  //   // });
  // }

  handleAddition(tag) {
    this.props.addTag(this.props.photoId, { name: tag });
  }

  handleDelete(idx) {
    // this.props.removeTag(this.props.photoId, { name: tag });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   // this.props.createTag(this.state, this.props.match.params.photoId)
  //   //   .then(this.setState({ body: "" }));
  // }

  render() {
    return (
      <ReactTags placeholder="Add a tag"
                 handleDelete={this.handleDelete}
                 handleAddition={this.handleAddition} />
    );
  }
}

export default TagForm;
