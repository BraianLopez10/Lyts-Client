import {
  SET_AUTH,
  SET_ID,
  LOGOUT,
  SET_PERFIL,
  SET_AUTH_DATA,
} from "./typeAction";
import api from "../../services/api";
import { setHeader } from "../../services/AuthJwt";

export const getDataUserLogged = () => {
  return async (dispatch) => {
    try {
      const response = await api.getDataUserLogged();
      dispatch({
        type: SET_AUTH_DATA,
        payload: {
          username: response.data.body.username,
          name: response.data.body.name,
          img: response.data.body.img,
          follows: response.data.body.follows,
        },
      });
    } catch (error) {
      return Promise.reject();
    }
  };
};

export const setAuth = (value) => {
  return {
    type: SET_AUTH,
    payload: value,
  };
};
export const setId = (value) => {
  return {
    type: SET_ID,
    payload: value,
  };
};
export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: LOGOUT,
      payload: {},
    });
  };
};

export const signup = (data) => {
  return async (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .signup(data)
        .then((resp) => {
          resolve(resp.data.messague);
        })
        .catch((err) => {
          reject();
        });
    });
  };
};
export const signin = (data) => {
  return async (dispatch) => {
    try {
      const response = await api.signIn(data);
      localStorage.setItem("token", "Bearer " + response.data.body.token);
      setHeader();
      dispatch({
        type: SET_PERFIL,
        payload: {
          user: response.data.body.user,
        },
      });
      dispatch({
        type: SET_AUTH_DATA,
        payload: {
          username: response.data.body.user.username,
          name: response.data.body.user.name,
          img: response.data.body.user.img,
          follows: response.data.body.user.follows,
        },
      });
      dispatch({
        type: SET_AUTH,
        payload: true,
      });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject();
    }
  };
};
export const signGoogle = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .signGoogle()
        .then((response) => {
          localStorage.setItem("token", "Bearer " + response.data.body.token);
          setHeader();
          dispatch({
            type: SET_PERFIL,
            payload: {
              user: response.data.body.user,
            },
          });
          dispatch({
            type: SET_AUTH_DATA,
            payload: {
              username: response.data.body.username,
              name: response.data.body.name,
              img: response.data.body.username,
            },
          });
          dispatch({
            type: SET_AUTH,
            payload: true,
          });
          return resolve();
        })
        .catch((err) => {
          return reject();
        });
    });
  };
};
