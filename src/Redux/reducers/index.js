import { combineReducers } from "redux";
import reducerPerfil from "./Perfil";
import reducerAuth from "./Auth";
import reducerInterfaz from "./Ui";
import reducerHome from "./Home";

const reducers = combineReducers({
  perfil: reducerPerfil,
  ui: reducerInterfaz,
  home: reducerHome,
  auth: reducerAuth,
});

export default reducers;
