import React from 'react';
import { Memes } from '../../api';

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
          <img src={this.state.memeData.meme_img} alt="A meme with text"/>
        </div>
        <aside className="meme-about">
          <h3>{this.state.memeData.title}</h3>
          <p>{this.state.memeData.body}</p>
          <p>Created by: 
            <a href={`/users/${this.state.memeData.author.id}`}>{`${this.state.memeData.author.full_name}`}</a>
          </p>
          <ul className="tag-list">
            {this.state.memeData.tag_names.split(', ').map((name, index) => {
              return <li key={`${index}`}><a href={`/memes?tagName=${name}`}>{`${name}`}</a></li>
            })}
            </ul>
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