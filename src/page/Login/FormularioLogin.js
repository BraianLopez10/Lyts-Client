import React, { useEffect } from "react";
import { Button, CircularProgress, Typography } from "@material-ui/core";
//Redux
import { connect } from "react-redux";
import { signin, signGoogle } from "../../Redux/actions/auth";
import { useForm } from "react-hook-form";
import "./style-forms.scss";

const FormularioLogin = (props) => {
  useEffect(() => {}, []);
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleLogin = async (data) => {
    const { username, password } = data;
    try {
      setLoading(true);
      await props.dispatch(signin({ username, password }));
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const handleLoginGoogle = async () => {
    fetch("http://localhost:4000/auth/google").then((r) => {
      console.log(r);
    });
    // setLoading(true);
    // try {
    //   await props.dispatch(signGoogle());
    // } catch (error) {}
    // setLoading(false);
  };
  return (
    <div className="box-page-login">
      <div className="box-page-login__header">
        <h2 className="title-h2">Lyts </h2>
        <p className="copy">Inicia sesión para ver fotos de tus amigos</p>
      </div>
      <form
        className="box-page-login__form"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="box-page-login__form__group">
          <input
            className="input"
            ref={register({ required: true, minLength: 5 })}
            placeholder="Usuario"
            name="username"
          ></input>
          <label>
            <Typography variant="caption" className="text-error-label">
              {errors.username ? "El usuario es requerido (min 5)" : ""}
            </Typography>
          </label>
        </div>
        <div className="box-page-login__form__group">
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            ref={register({ required: true, minLength: 8 })}
            name="password"
          ></input>
          <label>
            <Typography variant="caption" className="text-error-label">
              {errors.password ? "El password es requerido (min 8)" : ""}
            </Typography>
          </label>
        </div>
        <div className="box-page-login__form__button">
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
              {/* <Button
                variant="contained"
                className="form-login__form__button-button"
                onClick={() =>
                  (window.location = "http://localhost:4000/auth/google")
                }
                color="secondary"
                // href=
              >
                Iniciar Google
              </Button> */}
            </>
          ) : (
            <CircularProgress />
          )}
        </div>
        <div className="box-page-login__form__footer">
          <p onClick={props.handleMode}>¿No tienes una cuenta? registrate</p>
          <label className="text-error-back">
            <Typography variant="caption">{error}</Typography>
          </label>
        </div>
      </form>
    </div>
  );
};
export default connect(null, null)(FormularioLogin);
