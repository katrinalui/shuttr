import { connect } from 'react-redux';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

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
    requestPhoto: photoId => dispatch(requestPhoto(photoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
