import React from 'react';
import Meme from '../Meme';
import { Memes } from '../../api/index'
import {parseQueryString} from '../../helpers';
import PopularTags from '../PopularTags';

export default class MemeIndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: [],
      popularTags: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.getMemes = this.getMemes.bind(this);
    this.getPopularTags = this.getPopularTags.bind(this);
  }

  componentDidMount() {
    this.getMemes();
    this.getPopularTags();
  }

  getMemes() {
    const query = parseQueryString(this.props.location.search);
    const { tagName } = query;
    if (tagName) {
      Memes
      .findByTag(tagName)
      .then(memes => {
        this.setState({
          popularTags: [...this.state.popularTags],
          memeData: memes
        })
      })
    } else {
      Memes.all().then(memes => this.setState({
        memeData: memes
      }));
    }
  }
  getPopularTags() {
    Memes
    .popularTags()
    .then(tags => {
      this.setState({
        memeData: [...this.state.memeData],
        popularTags: tags
      })
    })
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
        <div className="memes-main-container">
          <h2 className="memes-heading">Memes</h2>
          <div className="filter-container">
          </div>
          <div className="memes-container">
            {this.state.memeData.map((meme, index) => {
              return <Meme key={index} id={meme.id} handleClick={this.handleClick}></Meme>
              }
            )}
          </div>
        </div>
        <PopularTags popularTags={this.state.popularTags}/>
      </div>
    )
  }
}

