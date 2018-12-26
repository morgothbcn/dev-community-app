import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props;

    // Get first name
    const firstName = profile.user.name.trim().split(" ")[0];

    // Skill List
    const skills = profile.skills.map((skill, index) => (
      <span key={index} className="panel-block">
        <span className="icon">
          <i className="fa fa-check" />
        </span>
        <span>{skill}</span>
      </span>
    ));

    return (
      <div className="columns">
        <div className="column">
          <nav className="panel">
            <p className="panel-heading">{firstName}'s Bio</p>
            <div className="panel-block">
              {isEmpty(profile.bio) ? (
                <span>{firstName} does not have a bio</span>
              ) : (
                <span>{profile.bio}</span>
              )}
            </div>
          </nav>
        </div>
        <div className="column">
          <nav className="panel">
            <p className="panel-heading">Skillset</p>
            <Fragment>{skills}</Fragment>
          </nav>
        </div>
      </div>
    );
  }
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
