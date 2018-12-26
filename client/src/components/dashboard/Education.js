import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileActions";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          {edu.school}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          {edu.degree}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </td>
        <td
          style={{
            verticalAlign: "middle"
          }}
        >
          <button
            onClick={this.onDeleteClick.bind(this, edu._id)}
            className="button is-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <Fragment>
        <h4 className="subtitle is-5">Education Credentials</h4>
        <table className="table is-fullwidth">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Years</th>
              <th />
            </tr>
            {education}
          </thead>
        </table>
      </Fragment>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(Education);
