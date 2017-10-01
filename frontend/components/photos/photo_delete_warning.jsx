import React from 'react';

class PhotoDeleteWarning extends React.Component {
  handleDelete() {
    this.props.destroyPhoto(this.props.photoId)
      .then(() => this.props.history.push('/home'));
  }

  render() {
    return (
      <div>
        <p>Are you sure you want to delete this photo?</p>
        <div className="delete-buttons">
          <button
            onClick={this.props.toggleDeleteModal}
            className="delete-cancel-button">
            Cancel
          </button>
          <button
            onClick={this.handleDelete.bind(this)}
            className="delete-button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoDeleteWarning;
