import React from 'react';
import { Memes } from '../../api';
import Meme from '../Meme';

export default class MemeShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: null
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    Memes.find(this.props.match.params.id)
    .then(meme => {
      this.setState({
        memeData: meme
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
    return(
      <div className="main-container">
        <div className="meme-img-container">
          <img src={this.state.memeData.meme_img}/>
        </div>
        <aside className="meme-about">
          <h3>{this.state.memeData.title}</h3>
          <p>{this.state.memeData.body}</p>
          <p>Created by: 
            <a href={`/users/${this.state.memeData.author.id}`}>{`${this.state.memeData.author.first_name} ${this.state.memeData.author.last_name}`}</a>
          </p>
        </aside>
        {this.state.memeData.authorized ? 
          <div className="buttons-container">
            <button className="update-meme"><a href={`/memes/${this.state.memeData.id}/edit`}>Update</a></button>
            <button className="delete-meme" onClick={this.handleDelete}>Delete Meme</button>
          </div>
        : null}
      </div>

    );
  }
}