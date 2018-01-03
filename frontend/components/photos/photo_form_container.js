import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Image, Transformation } from 'cloudinary-react';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';
import { requestUserAlbums } from '../../actions/album_actions';
import { selectAllUserAlbums } from '../../reducers/selectors';
import LoadingSpinner from '../loading_spinner';
import * as configs from '../../configs/cloudinary';

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUploading: false,
      uploadedFile: null,
      photo: props.photo
    };
    this.onImageDrop = this.onImageDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  componentWillMount() {
    this.props.requestUserAlbums(this.props.currentUser.id);

    if (this.props.formType === 'edit') {
      this.props.requestPhoto(this.props.match.params.photoId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      photo: newProps.photo
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    this.setState({ isUploading: true });

    const upload = request.post(configs.CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', configs.CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

    upload.end((err, res) => {
      if (err) {
        console.error(err);
        this.setState({ isUploading: false });
      }

      if (res.body.secure_url !== '') {
        this.setState({
          photo: { img_url: /Shuttr.*/.exec(res.body.secure_url)[0] },
          isUploading: false
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      photo: Object.assign({}, this.state.photo, { [field]: e.currentTarget.value })
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state.photo)
      .then(res => this.props.history.push(`/photos/${res.payload.photo.id}`));
  }

  cancelForm(e) {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    if (this.state.isUploading) {
      return <LoadingSpinner />;
    } else if (this.state.photo.img_url === '' && this.props.formType === 'new') {
      return (
        <div className="dropzone-container">
          <Dropzone
            className="dropzone"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}>
            <p>Drag and drop a photo or click to select a file to upload.</p>
          </Dropzone>
        </div>
      );
    } else {
      return (
        <div className="photo-form-container">
          { this.state.photo.img_url === '' ? null :
            <div className="uploaded-image">
              <Image publicId={this.state.photo.img_url} cloudName="shuttr" >
                <Transformation height="400" crop="scale" />
              </Image>
            </div>
          }

          <div className="photo-info-form-container">
            <form className="photo-form" onSubmit={this.handleSubmit}>
              <input type="text"
                onChange={this.update("title")}
                placeholder="Title (optional)"
                value={this.state.photo.title}
              />
              <br />
              <textarea
                onChange={this.update("description")}
                placeholder="Description (optional)"
                value={this.state.photo.description}
              />
              <br />

              <div className="form-buttons">
                <input
                  type="submit"
                  value={this.props.formType === 'new' ? "Upload" : "Edit" }
                />
              <button className="cancel-button" onClick={this.cancelForm}>Cancel</button>
              </div>
            </form>

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  let photo = {
    img_url: '',
    title: '',
    description: ''
  };
  let formType = 'new';

  if (ownProps.location.pathname.includes('edit')) {
    photo = Object.assign({}, photo, state.entities.photos[ownProps.match.params.photoId]);
    formType = 'edit';
  }

  return {
    loading: state.ui.loading,
    currentUser: state.session.currentUser,
    photo,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = createPhoto;

  if (ownProps.location.pathname.includes('edit')) {
    processForm = editPhoto;
  }

  return {
    processForm: photo => dispatch(processForm(photo)),
    requestPhoto: photoId => dispatch(requestPhoto(photoId)),
    requestUserAlbums: (userId) => dispatch(requestUserAlbums(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
