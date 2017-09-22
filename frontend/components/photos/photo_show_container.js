import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { requestPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    loading: state.ui.loading,
    photo: state.entities.photos[ownProps.match.params.photoId]
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  requestPhoto: photoId => dispatch(requestPhoto(photoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
