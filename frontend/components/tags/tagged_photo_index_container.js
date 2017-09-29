import { connect } from 'react-redux';
import { requestTagPhotos } from '../../actions/photo_actions';
import { requestTag } from '../../actions/tag_actions';
import TaggedPhotoIndex from './tagged_photo_index';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  tag: state.entities.tags[ownProps.match.params.tagId],
  photos: selectAllPhotos(state),
  loading: state.ui.loading,
});

const mapDispatchToProps = dispatch => ({
  requestTagPhotos: tagId => dispatch(requestTagPhotos(tagId)),
  requestTag: tagId => dispatch(requestTag(tagId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaggedPhotoIndex);
