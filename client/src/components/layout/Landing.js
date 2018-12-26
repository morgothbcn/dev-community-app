import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <section className="hero is-fullheight-with-navbar is-primary is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Developer Hub</h1>
            <h2 className="subtitle ">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </h2>
            <div className="field is-grouped is-grouped-centered">
              <p className="control">
                <Link to="/register" className="button is-primary">
                  Sign Up
                </Link>
              </p>
              <p className="control">
                <Link to="/login" className="button">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
