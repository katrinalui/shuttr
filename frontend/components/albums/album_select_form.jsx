import React from 'react';

class AlbumSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.photo;
  }

  handleChange() {

  }

  render() {
    const albumLinks = this.props.albums.map(album => (
      <div>
        <label>
          { album.title }
          <input type="checkbox" onChange={this.handleChange} id={ album.id } />
          {this.props.name}
        </label>
      </div>
    ));
  }
}

export default AlbumSelectForm;
