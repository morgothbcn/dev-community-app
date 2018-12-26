import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="box">
        <article className="media has-shadow">
          <figure className="media-left">
            {profile.user.avatar !== null ? (
              <figure className="image is-128x128">
                <img className="is-rounded" src={profile.user.avatar} alt="" />
              </figure>
            ) : null}
          </figure>
          <div className="media-content">
            <div className="content">
              <strong>{profile.user.name}</strong>
              <br />
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
              <br />
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
              <br />
              <br />
              <div className="field">
                <div className="control">
                  <Link
                    to={`/profile/${profile.handle}`}
                    className="button is-primary"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="media-right is-hidden-mobile">
            <div className="content">
              <strong>Skill set</strong>
              <br />
              <br />
              <div className="panel">
                {profile.skills.slice(0, 4).map((skill, index) => (
                  <div className="panel-block" key={index}>
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true" />
                    </span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
