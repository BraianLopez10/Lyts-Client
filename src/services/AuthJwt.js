import jwt from "jsonwebtoken";
import moment from "moment";
import axios from "axios";

export const getToken = () => {
  if (localStorage.getItem("token")) {
    let token = localStorage.getItem("token").split(" ")[1];
    if (token) {
      try {
        let decode = jwt.decode(token, "tokeninstragram");

        if (decode.exp <= moment().unix()) {
          return false;
        } else {
          return decode.sub;
        }
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const setHeader = () => {
  if (localStorage.getItem("token")) {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
  }
};
