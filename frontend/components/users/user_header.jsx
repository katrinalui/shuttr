import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import { ProtectedRoute } from '../../util/route_util';
import SubNav from './subnav';
import AlbumIndexContainer from '../albums/album_index_container';
import PhotoUserIndexContainer from '../photos/photo_user_index_container';

class UserHeader extends React.Component {
  componentWillMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUser(newProps.match.params.userId);
    }
  }

  pageName() {
    const path = this.props.location.pathname;
    const i = path.lastIndexOf('/');
    return path.substring(i + 1);
  }

  render() {
    const { user } = this.props;

    if (!user) { return <div></div>; }

    return (
      <div className="user-header-container">
        <div className="user-header">
          <div className="left-box" />
            <div className="center-box">
              <Image publicId={user.img_url} cloudName="shuttr" >
                <Transformation width="200" height="200" crop="thumb" />
              </Image>
              <h2>{ user.username }</h2>
            </div>
          <div className="right-box" />
        </div>

        <SubNav userId={user.id} activeLink={this.pageName.bind(this)()}/>

        <ProtectedRoute path='/users/:userId/albums' component={AlbumIndexContainer}/>
        <ProtectedRoute path='/users/:userId/photos' component={PhotoUserIndexContainer}/>
      </div>
    );
  }
}

export default UserHeader;
