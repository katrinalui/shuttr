import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Image, Transformation } from 'cloudinary-react';
import LoadingSpinner from '../loading_spinner';

const CLOUDINARY_UPLOAD_PRESET = "user_uploads";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/shuttr/image/upload";

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      uploadedFile: null,
      img_url: '',
      title: '',
      description: ''
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    this.setState({ isUploading: true });

    const upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

    upload.end((err, res) => {
      if (err) {
        console.error(err);
        this.setState({ isUploading: false });
      }

      if (res.body.secure_url !== '') {
        this.setState({
          img_url: /Shuttr.*/.exec(res.body.secure_url)[0],
          isUploading: false
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPhoto(this.state);
  }

  render() {
    if (this.state.isUploading) {
      return <LoadingSpinner />;
    } else if (this.state.img_url === '') {
      return (
        <Dropzone
          className="dropzone"
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop}>
          <p>This isn't fully functional yet. Do not use!</p>
          <br />
          <p>Drag and drop a photo or click to select a file to upload.</p>
        </Dropzone>
      );
    } else {
      return (
        <div className="photo-form-container">
          { this.state.img_url === '' ? null :
            <div className="uploaded-image">
              <Image publicId={this.state.img_url} cloudName="shuttr" >
                <Transformation height="400" crop="scale" />
              </Image>
            </div>
          }

          <div className="photo-info-form-container">
            <form className="photo-form">
              <input type="text"
                onChange={this.update("title")}
                placeholder="Title (optional)"
              />
              <br />
              <textarea
                onChange={this.update("title")}
                placeholder="Description (optional)"
              />
              <br />
              <input type="submit" value="Upload" />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default PhotoForm;
