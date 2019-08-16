import React from 'react';
import Meme from '../Meme';
import { Memes } from '../../api/index'

export default class MemeIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: []
    }
  }

  componentDidMount() {
    Memes.all().then(memes => this.setState({
      memeData: memes
    }));
  }

  render() {
    return(
      <div className="memes-container">
        {this.state.memeData.map((meme, index) => {
          return <Meme key={index} title={meme.title} body={meme.body} memeId={meme.id} imgURL={meme.meme_img}></Meme>
          }
        )}
      </div>
    )
  }
}