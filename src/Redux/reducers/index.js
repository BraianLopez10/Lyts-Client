import { combineReducers } from "redux";
import reducerAnyPerfil from "./reducerAnyPerfil";
import reducerUser from "./reducerUser";
import reducerInterfaz from "./reducerUi";
import reducerHome from "./reducerHome";
import reducerGlobal from "./reducerGlobal";
const reducers = combineReducers({
  userLogged: reducerUser,
  anyPerfil: reducerAnyPerfil,
  ui: reducerInterfaz,
  home: reducerHome,
  global: reducerGlobal,
});

export default reducers;
