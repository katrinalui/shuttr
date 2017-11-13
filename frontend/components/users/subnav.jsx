import React from 'react';
import { Link } from 'react-router-dom';

class SubNav extends React.Component {
  render() {
    const { userId, activeLink } = this.props;

    const linkTitles = ["photos", "albums"];
    const navItems = linkTitles.map(link => {
      let className = "link";
      if (link === activeLink) { className += " active"; }
      return (
        <Link className={className} to={`/users/${userId}/${link}`}>
          {link}
        </Link>
      );
    });

    return (
      <div className="subnav">
        <div className="links">
          {navItems}
        </div>
      </div>
    );
  }
}

export default SubNav;
