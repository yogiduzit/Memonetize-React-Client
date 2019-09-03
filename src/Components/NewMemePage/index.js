import React from 'react';
import { Memes } from '../../api';
import Error from '../Error';


export default class NewMemePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meme: {
        title: '',
        body: '',
        meme_img: null,
        tag_names: ''
      },
      errors: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      console.log(res);
      if (res.id) {
        this.props.history.push(`/memes/${res.id}`);
      } else if (res.errors) {
        this.setState({
          ...this.state,
          errors: res.errors
        })
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
  handleProgress(event) {

  }

  render() {
    return(
      <div className="meme-form-container">
        <h2 className="form-heading">Create a new meme</h2>
        {
          this.state.errors[0] ? 
          <div className="errors-container">
            {
              this.state.errors.map((value, index) => <Error key={index} body={value}/>)
            }
          </div>
           : 
           null
        }
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="title-field">Title</label>
            <input type="text" className="form-control title" name="title" id="title-field" placeholder="Enter title" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label for="body-textarea">Body</label>
            <textarea className="form-control body" name="body" id="body-textarea" rows="3" onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label for="meme-img">Meme Image</label>
            <input type="file" onChange={this.handleFile} />
            <progress className="meme-upload-progress" value="0" max="100"/>
          </div>
          <div className="form-group">
            <label for="tag-names-field">Tags</label>
            <input type="text" className="form-control tags" name="tag_names" id="tag-names-field" placeholder="funny, puns, star-wars" onChange={this.handleChange}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}