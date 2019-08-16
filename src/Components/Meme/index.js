import React from 'react';

export default class Meme extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: null
    }
  }
  render() {
    return(
      <div className="meme-container">
        <div className="meme-img-container">
          <img src={this.props.imgURL} className="meme-img" alt="A meme"></img>
        </div>
        <div className="meme-body">
          <h4><a href={`/memes/${this.props.memeId}`}>{this.props.title}</a></h4>
          <p>{this.props.body}</p>
        </div>
      </div>
    )
  }
}