import { User, Session } from "../api";

export const LOGIN_USER = 'LOGIN_USER';
export const SIGN_OUT_USER = "SIGN_OUT_USER";
export const CREATE_NEW_USER = "CREATE_NEW_USER";

const loginUser = user => ({
  type: LOGIN_USER,
  user: user
});

export function signOutUser() {
  return { type: SIGN_OUT_USER }
}

export const authenticateUser = userParams => {
  return dispatch => {
    return Session.create(userParams)
    .then(data => {
      if (data.error) {

      } else {
        dispatch(loginUser(data));
        localStorage.setItem("token", data.id);
      }

    })
  }
}

export const createNewUser = userParams => {
  return dispatch => {
    return User.create(userParams)
    .then(data => {
      if (data.errors) {
        console.log("Bad data");
      } else {
        dispatch(loginUser(data));
      }

    })
  }
}