import {
  ADD_COMMENT,
  DELETE_COMMENT,
  ADD_FOLLOW,
  DELETE_FOLLOW,
  DISLIKE,
  LIKE,
  UPDATE_USER,
  ADD_PHOTO,
  DELETE_PHOTO,
  SET_EXPLORER,
} from "./typeAction";
import api from "../../services/api";

export const disLike = (idPost) => {
  return async (dispacth) => {
    const resp = await api.disLike(idPost);

    dispacth({
      type: DISLIKE,
      payload: {
        idUser: resp.data.body.idUser,
        idPost: resp.data.body.idPost,
      },
    });
  };
};
export const like = (idPost) => {
  return async (dispacth) => {
    const resp = await api.like(idPost);

    dispacth({
      type: LIKE,
      payload: {
        idUser: resp.data.body.idUser,
        idPost: resp.data.body.idPost,
      },
    });
  };
};
export const editProfile = (dataForm) => {
  return async (dispatch) => {
    const update = await api.editProfile(dataForm);
    dispatch({
      type: UPDATE_USER,
      payload: {
        name: update.data.body.name,
        bio: update.data.body.bio,
        img: update.data.body.img,
      },
    });
  };
};
export const setFollow = (idToFollow) => {
  return async (dispatch) => {
    try {
      const resp = await api.setFollow(idToFollow);
      dispatch({
        type: ADD_FOLLOW,
        payload: resp.data.body,
      });
    } catch (error) {}
  };
};
export const unSetFollow = (idToFollow) => {
  return async (dispatch) => {
    try {
      const resp = await api.unSetFollow(idToFollow);
      dispatch({
        type: DELETE_FOLLOW,
        payload: resp.data.body._id,
      });
    } catch (error) {}
  };
};
export const addPost = (data) => {
  return async (dispatch) => {
    const post = await api.addPost(data);
    dispatch({
      type: ADD_PHOTO,
      payload: post.data.body,
    });
  };
};
export const deletePost = (idPost) => {
  return async (dispatch) => {
    await api.deletePost(idPost);
    dispatch({
      type: DELETE_PHOTO,
      payload: idPost,
    });
  };
};
export const addComment = (idPost, comment, username, img) => {
  return async (dispatch) => {
    const resp = await api.addComment(idPost, comment, username, img);
    dispatch({
      type: ADD_COMMENT,
      payload: {
        idPost: resp.data.body.idPost,
        comment: {
          content: resp.data.body.comment.content,
          user: resp.data.body.comment.user,
          username: resp.data.body.comment.username,
          img: resp.data.body.comment.img,
        },
      },
    });
  };
};
export const deleteComment = (idPost, idComment) => {
  return async (dispatch) => {
    const resp = await api.deleteComment(idPost, idComment);
    dispatch({
      type: DELETE_COMMENT,
      payload: {
        idPost: resp.data.body.idPost,
        idComment: resp.data.body.idComment,
      },
    });
  };
};

export const getExplorer = () => {
  return async (dispatch) => {
    try {
      const data = await api.getExplorer();
      dispatch({
        type: SET_EXPLORER,
        payload: data.data.body,
      });
      return Promise.resolve();
    } catch (error) {}
    return Promise.reject();
  };
};
