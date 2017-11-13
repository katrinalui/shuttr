import { connect } from 'react-redux';
import { requestTagPhotos } from '../../actions/photo_actions';
import { requestTag } from '../../actions/tag_actions';
import TaggedPhotoIndex from './tagged_photo_index';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  tag: state.entities.tags[ownProps.match.params.tagName],
  photos: selectAllPhotos(state),
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  requestTagPhotos: tagId => dispatch(requestTagPhotos(tagId)),
  requestTag: tagName => dispatch(requestTag(tagName))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaggedPhotoIndex);
