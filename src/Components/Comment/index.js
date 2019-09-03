import React from 'react';
import { Comments } from '../../api';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentData: null
    }

    this.getComment = this.getComment.bind(this);
  }

  componentDidMount() {
    this.getComment();
  }

  getComment() {
    Comments
    .find(this.props.memeId, this.props.commentId)
    .then(comment => {
      this.setState({
        commentData: comment
      })
    })
  }

  render() {
    if (!this.state.commentData) {
      return null;
    }

    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');

    return(
      <div className="comment-container">
        <div className="comment-body-container">
          <span className="about-comment"><small>
            <a href={`/users/${this.state.commentData.user_id}`}>{this.state.commentData.username} </a> 
            {timeAgo.format(new Date(this.state.commentData.created_at))}
          </small></span>
          <p className="comment-body">{this.state.commentData.body}</p>
        </div>
        {this.state.commentData.authorized 
          ? 
        <div className="comment-buttons-container">
          <button className="update comment-button btn btn-secondary">Update</button>
          <button className="delete comment-button btn btn-danger">Delete</button>
        </div>
        : null 
        }
      </div>
    )
  }
}