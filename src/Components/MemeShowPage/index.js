import React from 'react';

import CommentFormPage from '../CommentForm';
import Comment from '../Comment';

import { Memes } from '../../api';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'
import PopularTags from '../PopularTags';

export default class MemeShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: null,
      popularTags: []
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.getMeme = this.getMeme.bind(this);
    this.getPopularTags = this.getPopularTags.bind(this);
  }

  componentDidMount() {
    this.getMeme();
    this.getPopularTags();
  }

  getMeme() {
    Memes.find(this.props.match.params.id)
    .then(meme => {
      this.setState({
        memeData: meme
      })
    })
  }

  getPopularTags() {
    Memes
    .popularTags()
    .then(tags => {
      this.setState({
        ...this.state.memeData,
        popularTags: tags
      })
    })
  }

  handleDelete(event) {
    event.preventDefault();

    Memes.destroy(this.props.match.params.id)
    .then(res => {
      this.props.history.push('/memes')
    })
  }

  render() {
    if (!this.state.memeData) {
      return(<div className=""></div>)
    }

    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    const date = new Date(this.state.memeData.created_at);

    return(
      <div className="meme-main-container">
        <div className="meme-top-container">
          <div className="meme-show-container">
            <div className="meme-title">
              <span>
                <small>
                  Posted by <a href={`/users/${this.state.memeData.author.id}`}>{`${this.state.memeData.author.full_name}`} </a>
                  { timeAgo.format(date)} </small>
              </span>
              <h3>{this.state.memeData.title}</h3>
            </div>
            <div className="meme-img-container show">
              <img className="meme-img show" src={this.state.memeData.meme_img} alt="A meme with text"/>
            </div>
            <div className="meme-body">
              <p>{this.state.memeData.body}</p>
            </div>

              <ul className="tag-list">
                {this.state.memeData.tag_names.split(', ').map((name, index) => {
                  return <li key={`${index}`}><a className="badge badge-pill badge-primary" href={`/memes?tagName=${name}`}>{`${name}`}</a></li>
                })}
              </ul>
              
            {localStorage.currentUserId ? <a href={`${this.state.memeData.meme_img}`} download>Download</a> : null }

            {this.state.memeData.authorized 
            ? 
              <div className="buttons-container">
                <button className="meme-button btn btn-secondary"><a href={`/memes/${this.state.memeData.id}/edit`} className="text-white">Update</a></button>
                <button className="meme-button btn btn-danger" onClick={this.handleDelete}>Delete Meme</button>
              </div>
            : 
            null
            }

          <CommentFormPage memeId={this.props.match.params.id} getMeme={this.getMeme}/>
        </div>
        <div className="tags">
          <PopularTags popularTags={this.state.popularTags}/>
        </div>
      </div>


      <div className="comments-container">
        <h3 className="comments-heading">Comments</h3>
      { this.state.memeData.comments.map((comment, index) => {
        return <Comment memeId={this.props.match.params.id} key={index} commentId={comment.id}/>
      })}
      </div>

    </div>


    );
  }
}