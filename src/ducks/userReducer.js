import axios from "axios";

const initialState = {
  user: {}
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";

export function registerUser(username, email, password) {
  console.log(username, email, password);
  return {
    type: "REGISTER_USER",
    payload: axios
      .post(`/api/auth/register`, { username, email, password })
      .then(user => {
        console.log(user);
        return user.data;
      })
  };
}
export function loginUser(username, password) {
  console.log(username, password);
  return {
    type: "LOGIN_USER",
    payload: axios
      .post(`/api/auth/login`, { username, password })
      .then(response => {
        console.log(response);
        return response.data;
      })
  };
}
export function getUser() {
  return {
    type: "GET_USER",
    payload: axios.get(`/api/auth/user`).then(response => {
      console.log(response);
      return response.data;
    })
  };
}
export default function userReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case `${REGISTER_USER}_PENDING`:
    case `${LOGIN_USER}_PENDING`:
      return { ...state, loading: true };
    case `${REGISTER_USER}_FULFILLED`:
    case `${LOGIN_USER}_FULFILLED`:
      return { ...state, loading: false, user: action.payload };

    default:
      return state;
  }
}
