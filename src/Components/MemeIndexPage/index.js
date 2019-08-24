import React from 'react';
import Meme from '../Meme';
import { Memes } from '../../api/index'
import {parseQueryString} from '../../helpers';

export default class MemeIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: []
    }
  }

  componentDidMount() {
    const query = parseQueryString(this.props.location.search);
    const { tagName } = query;
    if (tagName) {
      Memes
      .findByTag(tagName)
      .then(memes => {
        this.setState({
          memeData: memes
        })
      })
    } else {
      Memes.all().then(memes => this.setState({
        memeData: memes
      }));
    }
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