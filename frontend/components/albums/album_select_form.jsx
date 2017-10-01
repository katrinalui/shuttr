import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

class AlbumSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumIds: props.albumIds
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  handleChange(value) {
    const albumIds = value.map(album => album.value);
    this.setState({ albumIds });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editAlbumMembership(this.props.photoId, this.state.albumIds)
      .then(() => this.props.toggleAlbumModal());
  }

  render() {
    const options = this.props.albums.map(album => (
      { value: album.id, label: album.title }
    ));

    return (
      <div className="album-select-form">
        <h3>Add this photo to an album</h3>
        <Select
          name="albums"
          className="album-select-menu"
          options={options}
          onChange={this.handleChange}
          multi={true}
          placeholder="Select album(s)"
          value={this.state.albumIds}
          closeOnSelect={false}
          />

        <Link to="/albums/new">Create a new album</Link>

        <div className='album-select-submit'>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default AlbumSelectForm;
