import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileActions";

class Experience extends Component {
  onDeleteClick(id) {
    this.props.deleteExperience(id);
  }

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          {exp.company}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          {exp.title}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
          )}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          <div className="field">
            <div className="control">
              <button
                className="button is-danger"
                onClick={this.onDeleteClick.bind(this, exp._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </td>
      </tr>
    ));
    return (
      <Fragment>
        <h4 className="subtitle is-5">Experience Credentials</h4>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experience}
          </thead>
        </table>
      </Fragment>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);
