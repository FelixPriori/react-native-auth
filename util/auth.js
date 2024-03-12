import axios from "axios";

const API_KEY = 'AIzaSyAAYddpUC7hsWSyXQ_nNF5L_RrPVb8jZDE'

const MODES = {
  singUp: 'signUp',
  signIn: 'signInWithPassword'
}

const getUrl = (mode) => `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

async function authenticate(mode, email, password) {
  const url = getUrl(mode)
  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  })
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate(MODES.singUp, email, password);
}

export function login(email, password) {
  return authenticate(MODES.signIn, email, password);
}