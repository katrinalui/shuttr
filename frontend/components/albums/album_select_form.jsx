import React from 'react';
import Select from 'react-select';

class AlbumSelectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.photo;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val) {

  }

  render() {
    options = this.props.albums

    return (
      <div>
        <Select
          name="form-field-name"
          value="one"
          options={options}
          onChange={this.handleChange}
          multi={true}
          />
      </div>
    );
  }
}

export default AlbumSelectForm;
