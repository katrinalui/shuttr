import React from 'react';
import AlbumIndexItem from './album_index_item';
import LoadingSpinner from '../loading_spinner';
import { Image, Transformation } from 'cloudinary-react';

class AlbumIndex extends React.Component {
  componentWillMount() {
    this.props.requestUserAlbums(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUserAlbums(newProps.match.params.userId);
    }
  }

  render() {
    const { albums, loading } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }

    if (albums.length === 0) { return <div></div>; }

    return (
      <div className="user-albums-container">
        <div className="album-index-user">
          <Image publicId={albums[0].owner_img_url} cloudName="shuttr" >
            <Transformation width="100" height="100" crop="thumb" />
          </Image>
          <h2>{ this.props.albums[0].owner_username }</h2>
        </div>

        <div className="albums-index">
          { albums.map(album =>
            <AlbumIndexItem key={album.id} album={album}/>
          ) }
        </div>
      </div>
    );
  }
}

export default AlbumIndex;
