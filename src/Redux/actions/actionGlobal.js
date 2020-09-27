import { SET_ID_LOGGED } from "./typeAction";

export function setIdLogged(id) {
  return {
    type: SET_ID_LOGGED,
    payload: {
      id,
    },
  };
}
