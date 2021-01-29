import { SET_FEED } from "./typeAction";
import api from "../../services/api";

export const getFeed = () => {
  return async (dispatch) => {
    try {
      const response = await api.getFeed();
      dispatch({
        type: SET_FEED,
        payload: response.data.body,
      });
    } catch (error) {
      return Promise.reject();
    }
  };
};
