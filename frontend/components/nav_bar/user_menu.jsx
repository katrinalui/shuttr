import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class UserMenu extends React.Component {
  handleClickOutside() {
    this.props.toggleModal();
  }

  render() {
    const { currentUser, logout } = this.props;

    return (
      <div className="user-menu">
        <div className="user-menu-links">
          <Link to={`/users/${currentUser.id}/photos`}>Photos</Link>
          <Link to={`/users/${currentUser.id}/albums`}>Albums</Link>
          <div className="logout-container" onClick={logout}>
            <a>Logout</a>
          </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(UserMenu);
