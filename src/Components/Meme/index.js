import React from 'react';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

export default function Meme(props) {

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo('en-US');
  const date = new Date(props.meme.created_at);
    return(
      <div className="meme-container">
        <div className="votes-container">
        <i className="fas fa-arrow-up"></i>
        <i className="fas fa-arrow-down"></i>
        </div>
        <div className="about-meme" onClick={props.handleClick}  data-key={props.meme.id}>
          <div className="meme-info">
            <span><small>Posted by <a href={`/users/${props.meme.author.id}`}>{props.meme.author.full_name} </a>{timeAgo.format(date)}</small></span>
          </div>
          <div className="meme-title">
            <h4>{props.meme.title}</h4>
          </div>
          <div className="meme-img-container">
            <img src={props.meme.meme_img} className="meme-img" alt="A meme"></img>
          </div>
        </div>

      </div>
    )
}