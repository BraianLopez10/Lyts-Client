import { ADD_FOLLOW, DELETE_FOLLOW, UPDATE_USER } from "./typeAction";
import api from "../../services/api";

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
