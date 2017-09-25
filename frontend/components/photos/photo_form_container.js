import { connect } from 'react-redux';
import { createPhoto, editPhoto, requestPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = (state, ownProps) => {
  let photo = {
    img_url: '',
    title: '',
    description: ''
  };

  const formType = ownProps.formType || 'new';

  if (formType === 'edit') {
    photo = state.entities.photos[ownProps.photoId];
  }

  return {
    loading: state.ui.loading,
    photo,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = createPhoto;

  if (ownProps.formType === 'edit') {
    processForm = editPhoto;
  }

  return {
    processForm: photo => dispatch(processForm(photo)),
    requestPhoto: photoId => dispatch(requestPhoto(photoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
