import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  onDeleteClick(id) {
    this.props.deletePost(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { post, auth, showActions } = this.props;

    return (
      <div className="box">
        <div className="media has-shadow">
          <div className="media-left">
            <figure className="image is-128x128">
              <img className="is-rounded" src={post.avatar} alt="" />
            </figure>
            <br />
          </div>
          <div className="media-content">
            <div className="content">
              <strong>{post.name}</strong>
              <br />
              {post.text}
              <br />
              <br />
              {showActions ? (
                <div className="field is-grouped">
                  <p className="control">
                    <button
                      onClick={this.onLikeClick.bind(this, post._id)}
                      type="button"
                      className="button"
                    >
                      <span className="icon ismall">
                        <i
                          className={classnames("fas fa-thumbs-up", {
                            "text-info": this.findUserLike(post.likes)
                          })}
                        />
                      </span>
                      <span className="badge badge-light">
                        {post.likes.length}
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <button
                      onClick={this.onUnlikeClick.bind(this, post._id)}
                      type="button"
                      className="button"
                    >
                      <span className="icon is-small">
                        <i className="fas fa-thumbs-down" />
                      </span>
                    </button>
                  </p>
                  <p className="control">
                    <Link
                      to={`/post/${post._id}`}
                      className="button is-primary"
                    >
                      Comments
                    </Link>
                  </p>
                  <p className="control">
                    {post.user === auth.user.id ? (
                      <button
                        onClick={this.onDeleteClick.bind(this, post._id)}
                        type="button"
                        className="button is-danger"
                      >
                        <span className="icon is-small">
                          <i className="fas fa-times" />
                        </span>
                      </button>
                    ) : null}
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
