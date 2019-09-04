const BASE_URL = process.env.REACT_APP_API_URL || "https://localhost:3000/api/v1";

export const Memes = {
  all() {
    return fetch(`${BASE_URL}/memes`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    });
  },
  find(id) {
    return fetch(`${BASE_URL}/memes/${id}`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    })
  },
  create(params) {
    return fetch(`${BASE_URL}/memes`, {
      method: 'POST',
      credentials: 'include',
      body: params
    })
    .then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/memes/${id}`, {
      method: 'DELETE',
      credentials: 'include',
    })
    .then(res => res.json());
  },
  update(params, id) {
    return fetch(`${BASE_URL}/memes/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      body: params
    })
    .then(res => res.json());
  },
  findByTag(tagName) {
    return fetch(`${BASE_URL}/memes?tag_name=${tagName}`, {
      credentials: 'include'
    })
    .then(res => res.json())
  },
  popularTags() {
    return fetch(`${BASE_URL}/popular_tags`, {
      credentials: 'include'
    })
    .then(res => res.json());
  }
}
export const Session = {
  create(params) {
    console.log(params);
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
export const Payment =  {
  create(params) {
    return fetch(`${BASE_URL}/charges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(params)
    })
  }
}

export const Vote = {
  create(params, memeId) {
    return fetch(`${BASE_URL}/memes/${memeId}/votes`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json);
  },
  update(params, memeId, voteId) {
    return fetch(`${BASE_URL}/memes/${memeId}/votes/${voteId}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json()); 
  }
}
export const Comments = {
  find(memeId, id) {
    return fetch(`${BASE_URL}/memes/${memeId}/comments/${id}`, {
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    })
  },
  create(params, memeId) {
    return fetch(`${BASE_URL}/memes/${memeId}/comments`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json());
  },
  update(params, memeId, id) {
    return fetch(`${BASE_URL}/memes/${memeId}/comments/${id}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    })
    .then(res => res.json()); 
  },
  destroy(memeId) {
    return fetch(`${BASE_URL}/memes/${memeId}/comments`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(res => {
      return res.json();
    });
  }
}