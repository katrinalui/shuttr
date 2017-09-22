import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { requestAllPhotos } from '../../actions/photo_actions';

const mapStateToProps = state => ({
  photos: Object.values(state.entities.photos).reverse(),
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  requestAllPhotos: () => dispatch(requestAllPhotos())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
