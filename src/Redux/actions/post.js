import api from "../../services/api";
import { SET_POST } from "./typeAction";

export const getPost = (idPost) => {
  return async (dispatch) => {
    const resp = await api.getPost(idPost);
    dispatch({
      type: SET_POST,
      payload: resp.data.body,
    });
  };
};
