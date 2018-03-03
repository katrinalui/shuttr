import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import values from 'lodash/values';
import { Image, Transformation } from 'cloudinary-react';
import AlbumIndexItem from './album_index_item';
import LoadingSpinner from '../loading_spinner';
import { requestUserAlbums } from '../../actions/album_actions';
import { requestUser } from '../../actions/user_actions';
import { selectAllUserAlbums } from '../../reducers/selectors';

class AlbumIndexContainer extends React.Component {
  componentWillMount() {
    const { user, actions, match: { params } } = this.props;
    actions.requestUserAlbums(params.userId);
    if (!user) {
      actions.requestUser(params.userId);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUserAlbums(newProps.match.params.userId);
      this.props.requestUser(newProps.match.params.userId);
    }
  }

  onNewAlbumClick() {
    this.props.history.push('/albums/new');
  }

  renderAlbumIndex() {
    const { albums } = this.props;
    let albumIndex = <h2>Nothing to see here.</h2>;

    if (albums.length > 0) {
      const albumItems = albums.map(album =>
        <AlbumIndexItem key={album.id} album={album}/>
      );
      albumIndex = (
        <div className="albums-index">
          { albumItems }
        </div>
      );
    }

    return albumIndex;
  }

  render() {
    const { albums, loading, user, currentUser } = this.props;

    return (
      <div className="albums-index-container">
        { currentUser.id === user.id
          && <div className="album-button-container">
              <button className="btn-grey"
                      onClick={this.onNewAlbumClick.bind(this)}>
                        New Album</button>
             </div> }
        { loading || !user || !albums
          ? <LoadingSpinner />
          : this.renderAlbumIndex() }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  albums: selectAllUserAlbums(state, ownProps.match.params.userId),
  loading: state.ui.loading,
  user: state.entities.users[ownProps.match.params.userId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, { requestUserAlbums, requestUser }), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndexContainer);
