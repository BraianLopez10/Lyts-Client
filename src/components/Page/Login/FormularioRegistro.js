import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import { signup, siginFacebook } from "../../../Redux/actions/actionUser";
import { useForm } from "react-hook-form";
import "./formularioRegister.scss";

const FormularioRegistro = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [message , setMessage] = React.useState("")

  const responseFacebook = (response) => {
    if (!response.accessToken) return false;
    props.dispatch(siginFacebook(response.accessToken));
  }

  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const { userName, password, email, name } = data;
      let response = await props.dispatch(
        signup({ userName, password, email, name })
      );
      if (response) {
        setMessage("Registrado con exito")
      }
    } catch (err) {
      setMessage("Error en tu registro")

    }
    setLoading(false);
  };

  return (
    <div>
      <div className="form-register">
        <div className="form-register__title">
          <h2 className="title-h2">Lyts</h2>
          <p className="copy">Regístrate para ver fotos de tus amigos</p>
        </div>
        <form
          className="form-register__content"
          onSubmit={handleSubmit(handleRegister)}
        >
          <input
            placeholder="Usuario"
            className="input"
            ref={register({ required: true, min: "6" })}
            name="userName"
          ></input>
          <label className="text-error-label">
            {errors.userName ? "El usuario es requerido" : ""}
          </label>
          <input
            placeholder="Nombre"
            className="input"
            ref={register({ required: true })}
            name="name"
          ></input>
          <label className="text-error-label">
            {errors.name ? "El nombre es requerido" : ""}
          </label>
          <input
            placeholder="Email"
            className="input"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            type="email"
            name="email"
          ></input>
          <label className="text-error-label">
            {errors.email ? "El email es requerido" : ""}
          </label>
          <input
            placeholder="Contraseña"
            className="input"
            ref={register({ required: true, min: 6, max: 8 })}
            type="password"
            name="password"
          ></input>
          <label className="text-error-label">
            {errors.password ? "El password es requerido" : ""}
          </label>

          <div className="form-register__content__button">
            {!loading ? (
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="form-register__content__button-button"
              >
                Registrarse
              </Button>
            ) : (
              <CircularProgress />
            )}
          </div>
        </form>
        <div className="form-register__footer">
            {message !== "" && <p>{message}</p>}
          <p className="form-register__footer-p" onClick={props.handleMode}>
            ¿Tienes una cuenta? Inicia Sesión
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ui: state.ui,
  };
};

export default connect(mapStateToProps, null)(FormularioRegistro);
