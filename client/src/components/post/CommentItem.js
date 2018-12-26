import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;

    return (
      <div className="box">
        <div className="media has-shadow">
          <div className="media-left">
            <figure className="image is-128x128">
              <img className="is-rounded" src={comment.avatar} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <strong>{comment.name}</strong>
              <div className="field">
                <p className="lead">{comment.text}</p>
                {comment.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                    type="button"
                    className="button is-danger"
                  >
                    <span className="icon is-small">
                      <i className="fas fa-times" />
                    </span>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
