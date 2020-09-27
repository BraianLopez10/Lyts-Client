import {
  GET_ALL_POSTS,
  LIKE_POST,
  DISLIKE_POST,
  ADD_COMMENT,
} from "./typeAction";

import api from "../../services/consultaApi";

export const obtenerPostFollows = () => {
  return async (dispatch) => {
    await new Promise((resolve, reject) => {
      api
        .getPostFollows()
        .then((response) => {
          dispatch({
            type: GET_ALL_POSTS,
            payload: {
              allPosts: response.data,
            },
          });
          resolve("Se obtuvieron los post");
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
};
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

export const addComment = (idPost, comment, userName) => {
  return (dispatch) => {
    api.addComment(idPost, comment).then((result) => {
      let commnentResult = result.data;
      commnentResult.user = { userName: userName };
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
