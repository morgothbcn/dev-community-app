import React from "react";
import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <Link to="/edit-profile">
            <span className="icon is-small">
              <i className="fas fa-user-circle" aria-hidden="true" />
            </span>
            <span>Edit profile</span>
          </Link>
        </li>
        <li>
          <Link to="/add-experience">
            <span className="icon is-small">
              <i className="fab fa-black-tie" aria-hidden="true" />
            </span>
            <span>Add experience</span>
          </Link>
        </li>
        <li>
          <Link to="/add-education">
            <span className="icon is-small">
              <i className="fas fa-graduation-cap" aria-hidden="true" />
            </span>
            <span>Add Education</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileActions;
