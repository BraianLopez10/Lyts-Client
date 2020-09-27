import React from "react";
import { Grid } from "@material-ui/core";
import FormularioLogin from "./FormularioLogin";
import FormularioRegistro from "./FormularioRegistro";

import "./index.scss";

function Login(props) {
  const [modeLogin, setModeLogin] = React.useState("login");
  const handleMode = () => {
    if (modeLogin === "login") {
      setModeLogin("registro");
    } else {
      setModeLogin("login");
    }
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="login"
    >
      <Grid item>
        <div></div>
      </Grid>
      <Grid item>
        {modeLogin === "login" ? (
          <FormularioLogin handleMode={handleMode}></FormularioLogin>
        ) : (
          <FormularioRegistro handleMode={handleMode} />
        )}
      </Grid>
    </Grid>
  );
}

export default Login;
