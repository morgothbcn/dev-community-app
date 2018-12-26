import React, { Component, Fragment } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { experience, education } = this.props;
    const expItems = experience.map(exp => (
      <div className="panel" key={exp._id}>
        <p className="panel-heading">{exp.company}</p>
        <span className="panel-block">
          <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </span>
        <span className="panel-block">
          <strong style={{ marginRight: "5px" }}>Position:</strong>
          {exp.title}
        </span>
        {exp.location === "" ? null : (
          <span className="panel-block">
            <strong style={{ marginRight: "5px" }}>Location: </strong>
            {exp.location}
          </span>
        )}
        {exp.description === "" ? null : (
          <span className="panel-block">
            <strong style={{ marginRight: "5px", alignSelf: "flex-start" }}>
              Description:{" "}
            </strong>
            {exp.description}
          </span>
        )}
      </div>
    ));

    const eduItems = education.map(edu => (
      <div key={edu._id} className="panel">
        <p className="panel-heading">{edu.school}</p>
        <span className="panel-block">
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </span>
        <span className="panel-block">
          <strong style={{ marginRight: "5px" }}>Degree:</strong>
          {edu.degree}
        </span>
        <span className="panel-block">
          <strong style={{ marginRight: "5px" }}>Field Of Study:</strong>{" "}
          {edu.fieldofstudy}
        </span>
        {edu.description === "" ? null : (
          <span className="panel-block">
            <strong style={{ marginRight: "5px", alignSelf: "flex-start" }}>
              Description:
            </strong>
            {edu.description}
          </span>
        )}
      </div>
    ));
    return (
      <div className="columns">
        <div className="column">
          <h3 className="title is-3 has-text-centered">Experience</h3>
          {expItems.length > 0 ? (
            <Fragment>{expItems}</Fragment>
          ) : (
            <p className="text-center">No Experience Listed</p>
          )}
        </div>
        <div className="column">
          <h3 className="title is-3 has-text-centered">Education</h3>
          {eduItems.length > 0 ? (
            <Fragment>{eduItems}</Fragment>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
