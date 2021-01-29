import React from "react";
import { render } from "react-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
//ROUTER DOM
import { BrowserRouter, Switch } from "react-router-dom";
import "./index.scss";
//Moment
import "moment/locale/es";

//Componentes
import Home from "./components/Page/Home";
import PerfilAny from "./components/Page/Perfil-Any";

// import FullPost from "./components/Page/FullPost/FullPost";
import ProtectedRoute from "./middleware/ProtectedRoute";
//Redux
import { Provider } from "react-redux";
import Store from "./Redux/Redux";
const moment = require("moment");
moment.locale("es");

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9c4dcc",
      main: "#6a1b9a",
      dark: "#38006b",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#e254ff",
      main: "#aa00ff",
      dark: "#7200ca",
      contrastText: "#ffffff",
    },
  },
});

render(
  <Provider store={Store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/" component={Home}></ProtectedRoute>
          {/* <ProtectedRoute
            exact
            path="/p/:idPost"
            component={FullPost}
          ></ProtectedRoute> */}
          <ProtectedRoute
            exact
            path="/explorer"
            component={<h1>Explorer</h1>}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/:username"
            component={PerfilAny}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/perfil"
            component={<h1>Hola</h1>}
          ></ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("app")
);
