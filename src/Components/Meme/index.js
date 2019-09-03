import React from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import { Vote, Memes } from '../../api';

export default class Meme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: null
    }

    this.vote = this.vote.bind(this);
  }

  componentDidMount() {
    this.setMeme();
  }

  setMeme() {
    Memes
    .find(this.props.id)
    .then(meme => {
      this.setState({
        meme: meme
      })
    })
  }

  getVotes() {
    
  }

  vote(event) {
    const { currentTarget } = event;
    console.log(currentTarget);
    const voteType = currentTarget.getAttribute('data-vote-type');
    const voteParams = {vote: {vote_type: voteType}};
    if (this.state.meme.current_user_vote) {
      this.handleVoteResponse(Vote.update(voteParams, this.state.meme.id, this.state.meme.current_user_vote.id))
    } else {
      this.handleVoteResponse(Vote.create(voteParams, this.state.meme.id))
    }
  }

  handleVoteResponse(response) {
    response.then(data => {
      this.setMeme();
    })
  }
  
  render() {
    if (!this.state.meme) {
      return null;
    }

    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const date = new Date(this.state.meme.created_at);
    return(
      <div className="meme-container">
        <div className="votes-container">
          <i className="fas fa-arrow-up" data-vote-type='1' onClick={this.vote}></i>
          <p className="votes">{this.state.meme.upvotes - this.state.meme.downvotes}</p>
          <i className="fas fa-arrow-down" data-vote-type='-1' onClick={this.vote}></i>
          </div>
        <div className="about-meme" onClick={this.props.handleClick}  data-key={this.state.meme.id}>
          <div className="meme-info">
            <span><small>Posted by <a href={`/users/${this.state.meme.author.id}`}>{this.state.meme.author.full_name} </a>{timeAgo.format(date)}</small></span>
          </div>
          <div className="meme-title">
            <h4>{this.state.meme.title}</h4>
          </div>
          <div className="meme-img-container index">
            <img src={this.state.meme.meme_img} className="meme-img" alt="A meme"></img>
          </div>

      </div>

      </div>
    )
  }
}