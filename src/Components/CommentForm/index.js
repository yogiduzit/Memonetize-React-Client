import React from 'react';
import { Comments } from '../../api';

export default class CommentFormPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {

      },
      errors: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const { target } = event;
    const newData = {[target.name]: target.value}

    this.setState({
      comment: {
        ...this.state.comment,
        ...newData
      },
      errors: [...this.state.errors]
    })

  }

  handleSubmit(event) {
    event.preventDefault();

    Comments
    .create(this.state, this.props.memeId)
    .then(res => {
      this.props.getMeme();
    })
  }

  render() {
    return(
      <div className="comment-form-container">
        <h3>Post comments</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Comment</label>
            <input type="text" className="form-control" name="body" onChange={this.handleChange} placeholder="What's on your mind ?"/>
          </div>
          <input type="submit" value="Post" onSubmit={this.handleSubmit}/>
        </form>

      </div>
    )
  }
}