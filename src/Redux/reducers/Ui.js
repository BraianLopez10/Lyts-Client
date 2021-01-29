import {
  SET_ERROR_LOGIN,
  SET_MESSAGE_INFO,
  SET_LOAD,
} from "../actions/typeAction";

const initialState = {
  errorLogin: "",
  messageInfo: "",
};

const reducerUi = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR_LOGIN:
      return {
        ...state,
        errorLogin: action.payload.error,
      };

    case SET_MESSAGE_INFO:
      return {
        ...state,
        messageInfo: action.payload.messageInfo,
      };
    default:
      return state;
  }
};

export default reducerUi;
