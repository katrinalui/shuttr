import React from 'react';
import { Image, Transformation } from 'cloudinary-react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      buttonDisplayed: false
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

  onFocus() {
    this.setState({ buttonDisplayed: true });
  }

  onBlur() {
    if (this.state.body === "") {
      this.setState({ buttonDisplayed: false });
    }
  }

  getClass() {
    if (this.state.buttonDisplayed) {
      return "comment-button";
    } else {
      return "comment-button hidden";
    }
  }

  render() {
    const { currentUser } = this.props;

    const buttonClass = this.getClass();

    return (
      <div className="comment-form-container">
        <textarea value={this.state.body}
          onChange={this.update()}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          placeholder="Add a comment" />
        <div className={buttonClass}>
          <button onClick={this.handleSubmit}>Comment</button>
        </div>
      </div>
    );
  }
}

export default CommentForm;
