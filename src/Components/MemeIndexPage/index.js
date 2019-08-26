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

    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    event.preventDefault();

    const {currentTarget} = event;
    const id = currentTarget.getAttribute('data-key');
    this.props.history.push(`/memes/${id}`);
  }

  render() {
    return(
      <div className="index-container">
        <div className="memes-container">
          {this.state.memeData.map((meme, index) => {
            return <Meme key={index} meme={meme} handleClick={this.handleClick}></Meme>
            }
          )}
        </div>
        <div className="popular-tags-container">
          
        </div>
      </div>
    )
  }
}