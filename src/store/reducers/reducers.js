import {LOGIN_USER, SIGN_OUT_USER} from '../actions'; 

const initialState = {
  currentUser: null
}

export default function handleSession(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, currentUser: action.user}
    case SIGN_OUT_USER:
      return Object.assign({}, state, {
        userId: null
      })
  }
}


