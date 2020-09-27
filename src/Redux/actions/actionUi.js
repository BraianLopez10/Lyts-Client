import {
  SET_ERROR_LOGIN,
  SET_AUTHORIZATION,
  SET_MESSAGE_INFO
} from "./typeAction";

export const setMessageInfo = message => {
  return {
    type: SET_MESSAGE_INFO,
    payload: {
      messageInfo: message
    }
  };
};

export const setAuthorization = boolean => {
  return {
    type: SET_AUTHORIZATION,
    payload: {
      valor: boolean
    }
  };
};

export const errorLogin = error => {
  return {
    type: SET_ERROR_LOGIN,
    payload: {
      error
    }
  };
};
