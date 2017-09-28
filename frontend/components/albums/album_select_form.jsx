import React from 'react';
import Select from 'react-select';

class AlbumSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: props.albums,
      albumIds: props.albumIds,
      value: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    const albumIds = value.map(album => album.value);
    this.setState({ albumIds, value });
  }

  toggleCheckBox(e) {

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editAlbumMembership(this.props.photoId, this.state.albumIds)
      .then(() => this.props.toggleAlbumModal());
  }

  render() {
    const albums = this.props.albums;

    const options = Object.keys(albums).map(id => (
      { value: id, label: albums[id].title }
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
          value={this.state.value}
          closeOnSelect={false}
          />
        <div className='album-select-submit'>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default AlbumSelectForm;
