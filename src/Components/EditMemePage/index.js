import React from 'react';
import { Memes } from '../../api';


export default class EditMemePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: {
        title: '',
        body: '',
        meme_img: null
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    Memes
    .find(this.props.match.params.id)
    .then(res => {
      if (res.id) {
        this.setState({
          meme: res
        })
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    Object.entries(this.state.meme).forEach(([key, value]) => {
      formData.append(key, value);
    })

    Memes
    .create(formData)
    .then(res => {
      if (res.id) {
        this.props.history.push(`/memes/${res.id}`);
      }
    });
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    const newData = { [name]: value }

    this.setState({
      meme: {
        ...this.state.meme,
        ...newData
      }
    })
  }

  handleFile(event) {
    const {target} = event;

    this.setState({
      meme: {
        ...this.state.meme,
        meme_img: target.files[0]
      }
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="title-field">Title</label>
          <input type="text" class="form-control title" name="title" id="title-field" placeholder="Enter title" value={this.state.meme.title} onChange={this.handleChange}/>
        </div>
        <div class="form-group">
          <label for="body-textarea">Body</label>
          <textarea class="form-control body" name="body" id="body-textarea" value={this.state.meme.body} rows="3" onChange={this.handleChange}></textarea>
        </div>
        <div class="form-group">
          <label for="meme-img">Meme Image</label>
          <input type="file" onChange={this.handleFile} ></input>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }
}