const BASE_URL = "https://sell-yo-meme.herokuapp.com/api/v1";

export const Memes = {
  all() {
    return fetch(`${BASE_URL}/memes`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json()
    });
  },
  find(id) {
    return fetch(`${BASE_URL}/memes/${id}`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    })
  } 
}
export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(res => {
      return res.json();
    });   
  },
  destroy() {
    return fetch(`${BASE_URL}/sessions`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    });
  }
}

export const User = {
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(params)
    })
    .then(res => {
      return res.json();
    });
  },
  find(id) {
    return fetch(`${BASE_URL}/users/${id}`, {
      credentials: "include"
    })
    .then(res => {
      return  res.json()
    })
  },
  current() {
    return fetch(`${BASE_URL}/current_user`, {
      credentials: "include"
    })
    .then(res => {
      return res.json()
    });
  }
}