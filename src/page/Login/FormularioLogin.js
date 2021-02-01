import React, { useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
//Redux
import { connect } from "react-redux";
import { signin, signGoogle } from "../../Redux/actions/auth";
import { useForm } from "react-hook-form";
import "./formularioLogin.scss";

const FormularioLogin = (props) => {
  useEffect(() => {}, []);
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (data) => {
    const { username, password } = data;
    try {
      setLoading(true);
      await props.dispatch(signin({ username, password }));
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };
  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      await props.dispatch(signGoogle());
    } catch (error) {}
    setLoading(false);
  };
  return (
    <div className="form-login">
      <div className="form-login__title">
        <h2 className="title-h2">Lyts </h2>
        <p className="copy">Inicia sesión para ver fotos de tus amigos</p>
      </div>
      <form className="form-login__form" onSubmit={handleSubmit(handleLogin)}>
        <input
          className="input"
          ref={register({ required: true })}
          placeholder="Usuario"
          name="username"
        ></input>
        <label className="text-error-label">
          {errors.username ? "El usuario es requerido" : ""}
        </label>
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          ref={register({ required: true })}
          name="password"
        ></input>
        <label className="text-error-label">
          {errors.password ? "El password es requerido" : ""}
        </label>
        <div className="form-login__form__button">
          {!loading ? (
            <>
              <Button
                variant="contained"
                className="form-login__form__button-button"
                type="submit"
                color="primary"
              >
                Iniciar Sesión
              </Button>
              <Button
                variant="contained"
                className="form-login__form__button-button"
                onClick={handleLoginGoogle}
                color="secondary"
              >
                Iniciar Google
              </Button>
            </>
          ) : (
            <CircularProgress />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <label className="text-error-label">
            {/* {props.ui.errorLogin && props.ui.errorLogin} */}
          </label>
        </div>
        <div className="form-register__footer">
          <p className="form-register__footer-p" onClick={props.handleMode}>
            ¿No tienes una cuenta? registrate
          </p>
        </div>
      </form>
    </div>
  );
};
export default connect(null, null)(FormularioLogin);
