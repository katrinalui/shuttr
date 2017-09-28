import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update() {
    return e => this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state, this.props.match.params.photoId)
      .then(this.setState({ body: "" }));
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="comment-form-container">
        <textarea value={this.state.body} onChange={this.update()} placeholder="Add a comment"></textarea>
        <div className="comment-button">
          <button onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    );
  }
}

export default CommentForm;
