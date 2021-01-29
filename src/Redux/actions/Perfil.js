import { SET_PERFIL } from "./typeAction";
import api from "../../services/api";

export const getUserProfile = (username) => {
  return async (dispatch) => {
    try {
      const perfil = await api.getUserProfile(username);
      dispatch({
        type: SET_PERFIL,
        payload: perfil.data.body,
      });
    } catch (error) {}
  };
};
