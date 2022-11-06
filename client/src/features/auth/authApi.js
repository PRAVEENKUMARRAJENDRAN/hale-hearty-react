import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/";

const register = (firstName, lastName, email, password) => {

  return axios.post( API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
  });
};


const login = (email, password) => {
  return axios
    .post( API_URL + "login", {
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

const AuthApi = {
  register,
  login,
  logout
} 

export default AuthApi
