const Memes = {
  all() {
    return fetch('https://sell-yo-meme.herokuapp.com/api/v1/memes')
    .then(res => {
      return res.json()
    });
  } 
}

export default Memes;