import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false };
    this.toggleMobile = this.toggleMobile.bind(this);
  }

  toggleMobile() {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
    this.toggleMobile();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { menuOpen } = this.state;

    const authLinks = (
      <Fragment>
        <Link className="navbar-item" to="/feed" onClick={this.toggleMobile}>
          Post Feed
        </Link>
        <Link
          className="navbar-item"
          to="/dashboard"
          onClick={this.toggleMobile}
        >
          Dashboard
        </Link>
        <a
          className="navbar-item"
          onClick={this.onLogoutClick.bind(this)}
          href="/"
        >
          Log Out
        </a>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <Link
          className="navbar-item"
          to="/register"
          onClick={this.toggleMobile}
        >
          Sign Up
        </Link>
        <Link className="navbar-item" to="/login" onClick={this.toggleMobile}>
          Login
        </Link>
      </Fragment>
    );

    return (
      <nav
        className="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <span className="icon is-medium has-text-primary">
                <i className="fas fa-code-branch fa-lg" />
              </span>
              <span>Developer Hub</span>
            </Link>
            <a
              role="button"
              className={menuOpen ? "navbar-burger is-active" : "navbar-burger"}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleMobile}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={menuOpen ? "navbar-menu is-active" : "navbar-menu"}>
            <div className="navbar-start">
              <Link
                className="navbar-item"
                onClick={this.toggleMobile}
                to="/profiles"
              >
                Developers
              </Link>
            </div>
            <div className="navbar-end">
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
