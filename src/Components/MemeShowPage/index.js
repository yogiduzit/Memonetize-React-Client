import React from 'react';
import Memes from '../../api';
import Meme from '../Meme';

export default class MemeShowPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memeData: null
    }
  }

  componentDidMount() {
    Memes.find(this.props.match.params.id)
    .then(meme => {
      this.setState({
        memeData: meme
      })
    })
  }

  render() {
    if (!this.state.memeData) {
      return(<div className=""></div>)
    }
    return(
      <div className="main-container">
        <Meme imgURL={this.state.memeData.meme_img} title={this.state.memeData.title} body={this.state.memeData.body}></Meme>
      </div>
    );
  }
}