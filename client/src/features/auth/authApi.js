import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const token = JSON.parse(localStorage.getItem("token"));


const register = (name, email, password) => {
  return axios
    .post(API_URL + "register", {
      name,
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const user = ( ) =>{

  return axios
  .get(API_URL + "user",{
    headers: {
      xauthtoken: token.token //the token is a variable which holds the token
    }})
    .then((response) =>{
      return response.data
    })

}

const AuthApi = {
  register,
  login,
  logout,
  user
};

export default AuthApi;
