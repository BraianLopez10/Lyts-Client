import {
  SET_ERROR_LOGIN,
  SET_AUTHORIZATION,
  SET_MESSAGE_INFO
} from "../actions/typeAction";

const initialState = {
  errorLogin: "",
  authorization: false,
  messageInfo: "",
};

const reducerInterfaz = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.payload.error
      };
    case SET_AUTHORIZATION:
      return {
        ...state,
        authorization: action.payload.valor
      };
    case SET_MESSAGE_INFO:
      return {
        ...state,
        messageInfo: action.payload.messageInfo
      };
    default:
      return state;
  }
};

export default reducerInterfaz;
