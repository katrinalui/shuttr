import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import LoadingSpinner from '../loading_spinner';
import PhotoItem from '../photos/photo_item';

class AlbumShow extends React.Component {
  componentWillMount() {
    this.props.requestAlbum(this.props.match.params.albumId);
  }

  componentDidMount() {
    document.body.scrollTop = 0;
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.albumId !== newProps.match.params.albumId) {
      this.props.requestAlbum(newProps.match.params.albumId);
    }
  }

  render() {
    const { album, photos, loading, currentUser } = this.props;

    const getParent = () => {
      return document.querySelector('.body');
    };

    const photoItems = (
      <MasonryInfiniteScroller
        className="masonry"
        sizes={[ { columns: 1, gutter: 10 },
          { mq: '768px', columns: 2, gutter: 5 },
          { mq: '1024px', columns: 3, gutter: 5 },
          { mq: '1700px', columns: 4, gutter: 5 }]}>
        { photos.map(photo =>
          <PhotoItem key={photo.id} photo={photo} width={300}/>
        )}
      </MasonryInfiniteScroller>
    );

    let divStyle;
    if (album && album.cover_photo_url) {
      divStyle = {
        backgroundImage: `url(https://res.cloudinary.com/shuttr/image/upload/c_scale,w_1600/v1/${album.cover_photo_url})`
      };
    } else {
      divStyle = {
        backgroundColor: 'gray'
      };
    }

    return (
       loading || !album
        ? <LoadingSpinner />
        :  <div className="album-info-container">
            <div className="album-info" style={divStyle}>
              <div className="album-info-overlay">
                {currentUser.id === album.owner_id &&
                  <div className="album-edit-bar">
                    <Link to={`/albums/${album.id}/edit`}>
                      <button id="edit-menu-button" onClick={this.openModal}>
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </Link>
                  </div>
                }
                <div className="album-text">
                  <div className="album-title-desc">
                    <h1>{album.title}</h1>
                    <p>{album.description}</p>
                  </div>
                  <h3>
                    By: <Link to={`/users/${album.owner_id}/photos`}>
                    {album.owner_username}
                  </Link>
                </h3>
              </div>
            </div>
          </div>
          <div className="photo-gallery-container">
            { photoItems }
          </div>
        </div>
    );
  }
}

export default AlbumShow;
