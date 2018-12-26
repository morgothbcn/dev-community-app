import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "26c196bacea7db10cf48",
      clientSecret: "0885cb690e07d2a93a6afb0891fb552fd9f7aa53",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount() {
    const { username } = this.props;
    const { count, sort, clientId, clientSecret } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.myRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const { repos } = this.state;

    const repoItems = repos.map(repo => (
      <div key={repo.id} className="box">
        <div className="columns">
          <div className="column">
            <a
              href={repo.html_url}
              className="title is-5 has-text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </div>
          <div className="column">
            <div className="field has-addons">
              <p className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <span className="is-hidden-mobile">Stars: </span>
                    {repo.stargazers_count}
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-eye" />
                  </span>
                  <span>
                    <span className="is-hidden-mobile">Watchers: </span>
                    {repo.watchers_count}
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button">
                  <span className="icon is-small">
                    <i className="fas fa-code-branch" />
                  </span>
                  <span>
                    <span className="is-hidden-mobile">Forks: </span>
                    {repo.forks_count}
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div ref="myRef">
        <hr />
        <h3 className="title is-3 has-text-centered">Latest Github repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
