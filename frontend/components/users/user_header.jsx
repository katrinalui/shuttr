import React from 'react';
import { Image, Transformation } from 'cloudinary-react';
import SubNav from './subnav';

class UserHeader extends React.Component {
  componentWillMount() {
    this.props.requestUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.requestUser(newProps.match.params.userId);
    }
  }

  render() {
    const { user } = this.props;

    return (
      <div className="user-header-container">
        <div className="album-index-bar">
          <div className="left-box" />
            <div className="album-owner">
              <Image publicId={user.img_url} cloudName="shuttr" >
                <Transformation width="200" height="200" crop="thumb" />
              </Image>
              <h2>{ user.username }</h2>
            </div>
          <div className="right-box" />
        </div>
      </div>
    );
  }
}

export default UserHeader;
