import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { createAlbum, editAlbum, requestAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let album = {
    title: '',
    description: ''
  };

  let formType = 'new';

  if (ownProps.location.pathname.includes('edit')) {
    album = Object.assign({}, album, state.entities.albums[ownProps.match.params.albumId]);
    formType = 'edit';
  }

  return {
    loading: state.ui.loading,
    album,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = createAlbum;

  if (ownProps.location.pathname.includes('edit')) {
    processForm = editAlbum;
  }

  return {
    processForm: album => dispatch(processForm(album)),
    requestAlbum: albumId => dispatch(requestAlbum(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
