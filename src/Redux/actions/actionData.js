import {
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
  GET_POST,
  SET_USER_DATA,
} from "./typeAction";

import api from "../../services/consultaApi";

export const like = (idPost) => {
  return (dispatch) => {
    api.like(idPost).then((res) => {
      dispatch({
        type: LIKE_POST,
        payload: {
          idPost,
        },
      });
    });
  };
};

export const disLike = (idPost) => {
  return (dispath) => {
    api.disLike(idPost).then(() => {
      dispath({
        type: DISLIKE_POST,
        payload: {
          idPost,
        },
      });
    });
  };
};

export const addComment = (idPost, comment, userName, imgUser) => {
  return (dispatch) => {
    api.addComment(idPost, comment).then((result) => {
      let commnentResult = result.data;

      commnentResult.user = { userName: userName, img: imgUser };
      dispatch({
        type: ADD_COMMENT,
        payload: {
          idPost,
          comment: commnentResult,
        },
      });
    });
  };
};

export const getPost = (idPost) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .getPost(idPost)
        .then((result) => {
          dispatch({
            type: GET_POST,
            payload: {
              post: result.data,
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

export const getUserProfile = (userName) => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .getUserProfile(userName)
        .then((respuesta) => {
          dispatch({
            type: SET_USER_DATA,
            payload: {
              user: respuesta.data,
            },
          });
          resolve("User guardado");
        })
        .catch((err) => {
          dispatch({
            type: SET_USER_DATA,
            payload: {
              user: {},
            },
          });
          reject("User no encontrado");
        });
    });
  };
};
