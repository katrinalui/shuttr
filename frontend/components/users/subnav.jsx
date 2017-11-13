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
        <li className={className}>
          <Link to={`/users/${userId}/${link}`}>{link}</Link>
        </li>
      );
    });

    return (
      <div className="subnav">
        <ul className="links">
          {navItems}
        </ul>
      </div>
    );
  }
}

export default SubNav;
