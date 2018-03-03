import React from 'react';
import AlbumIndexItem from './album_index_item';
import LoadingSpinner from '../loading_spinner';
import { Image, Transformation } from 'cloudinary-react';

class AlbumIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserAlbums(this.props.match.params.userId);
    this.props.requestUser(this.props.match.params.userId);
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

  render() {
    const { albums, loading, user, currentUser } = this.props;

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

    return (
      <div className="albums-index-container">
        { currentUser.id === user.id
          && <div className="album-button-container">
              <button className="btn-grey"
                      onClick={this.onNewAlbumClick.bind(this)}>
                        New Album</button>
             </div> }
        { loading && !user
          ? <LoadingSpinner />
          : albumIndex }
      </div>
    );
  }
}

export default AlbumIndex;
