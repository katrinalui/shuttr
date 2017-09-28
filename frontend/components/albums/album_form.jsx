import React from 'react';
import LoadingSpinner from '../loading_spinner';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: props.album
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    if (this.props.formType === 'edit') {
      this.props.requestAlbum(this.props.match.params.albumId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      album: newProps.album
    });
  }

  update(field) {
    return e => this.setState({
      album: Object.assign({}, this.state.album, { [field]: e.currentTarget.value })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state.album)
      .then(res => this.props.history.push(`/albums/${res.payload.album.id}`));
  }

  cancelForm(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  onDelete(e) {
    e.preventDefault();
    const { album } = this.props;
    this.props.destroyAlbum(album.id)
      .then(() => this.props.history.push(`/users/${album.owner_id}/albums`));
  }

  deleteButton() {
    const { currentUser, album, formType } = this.props;
    if (formType === "edit" && currentUser.id === album.owner_id) {
      return <button className="delete-button" onClick={this.onDelete}>Delete</button>;
    } else {
      return <div></div>;
    }
  }

  render() {
    const { formType } = this.props;

    if (this.props.loading) {
      return <LoadingSpinner />;
    } else {
      return (
        <div className="album photo-form-container">
          <h2>{ formType === 'new' ? "Create a new album" : "Edit Album" }</h2>

          <form className="photo-form" onSubmit={this.handleSubmit}>
            <input type="text"
              onChange={this.update("title")}
              placeholder="Title"
              value={this.state.album.title}
            />
            <br />
            <textarea
              onChange={this.update("description")}
              placeholder="Description (optional)"
              value={this.state.album.description}
            />
            <br />
            <div className="form-buttons">
              <input
                type="submit"
                value={this.props.formType === 'new' ? "Create" : "Edit" }
              />
            { this.deleteButton() }
            <button className="cancel-button" onClick={this.cancelForm}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default AlbumForm;
