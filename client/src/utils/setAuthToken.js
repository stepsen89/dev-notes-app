import axios from "axios";

// if we have a token we send it with every request
const setAuthToken = token => {
  if (token) {
    console.log(token);
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
