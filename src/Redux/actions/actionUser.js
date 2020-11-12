import {
  SET_USER,
  UPDATE_SEGUIDORES,
  LOGOUT,
  UPDATE_PROFILE,
} from "./typeAction";
import { errorLogin, setAuthorization } from "./actionUi";
import { obtenerPostFollows } from "./actionHome";
import api from "../../services/consultaApi";
import { setHeader } from "../../services/AuthJwt";

export const getDataUserLogged = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .getDataUserLogged()
        .then((response) => {
          dispatch({
            type: SET_USER,
            payload: {
              user: response.data,
            },
          });
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
  };
};

export const signin = (data) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .signIn(data)
        .then((response) => {
          localStorage.setItem("token", "Bearer " + response.data.token);
          setHeader();
          dispatch(errorLogin(""));
          dispatch({
            type: SET_USER,
            payload: {
              user: response.data.user,
            },
          });
          dispatch(setAuthorization(true));
          return resolve();
        })
        .catch((err) => {
          dispatch(errorLogin("Revisa tus credenciales"));
          return reject();
        });
    });
  };
};

export const siginFacebook = (access_token) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .authFacebook(access_token)
        .then((res) => {
          let token = res.headers["x-auth-token"];
          if (!token) return reject();
          localStorage.setItem("token", "Bearer " + token);
          setHeader();
          dispatch({
            type: SET_USER,
            payload: {
              user: res.data.data,
            },
          });
          dispatch(errorLogin(""));
          dispatch(setAuthorization(true));
          resolve()
        })
        .catch((err) => {
          dispatch(errorLogin("Revisa tus credenciales"));
          reject()
        });
    });
  };
};

export const getUser = (id) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .getUser(id)
        .then((result) => {
          dispatch({
            type: SET_USER,
            payload: {
              user: result.data,
            },
          });
          dispatch(setAuthorization(true));
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const addPost = (post) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      api
        .addPost(post)
        .then(() => {
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const deletePost = (idPost) => {
  return (dispatch) => {
    api.deletePost(idPost).then((doc) => {});
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

export const setFollow = (userPefil) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .setFollow(userPefil._id)
        .then(() => {
          dispatch(obtenerPostFollows());
          dispatch({
            type: UPDATE_SEGUIDORES,
            payload: {
              aumentar: true,
              user: userPefil,
            },
          });
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
  };
};

export const unSetFollow = (userPefil) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .unSetFollow(userPefil._id)
        .then(() => {
          dispatch(obtenerPostFollows());
          dispatch({
            type: UPDATE_SEGUIDORES,
            payload: {
              aumentar: false,
              user: userPefil,
            },
          });
          resolve();
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};

export const editProfileAction = (data) => {
  let dataUpdated = {};

  if (data.get("name")) dataUpdated.name = data.get("name");
  if (data.get("bio")) dataUpdated.bio = data.get("bio");
  if (data.get("img")) dataUpdated.img = URL.createObjectURL(data.get("img"));

  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .editProfile(data)
        .then(() => {
          dispatch({
            type: UPDATE_PROFILE,
            payload: {
              user: dataUpdated,
            },
          });
          resolve();
        })
        .catch((err) => {
          reject();
        });
    });
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
