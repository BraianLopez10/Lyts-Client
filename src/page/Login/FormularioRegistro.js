import React, { useState } from "react";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { signup } from "../../Redux/actions/auth";
import { useForm } from "react-hook-form";
import "./style-forms.scss";

const FormularioRegistro = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, seterror] = useState("");
  console.log(errors);
  const handleRegister = async (data) => {
    setLoading(true);
    try {
      const { username, password, email, name } = data;
      await props.dispatch(signup({ username, password, email, name }));
    } catch (err) {}
    setLoading(false);
  };

  return (
    <div>
      <div className="box-page-login">
        <div className="box-page-login__title">
          <h2 className="title-h2">Lyts</h2>
          <p className="copy">Regístrate para ver fotos de tus amigos</p>
        </div>
        <form
          className="box-page-login__form"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="box-page-login__form__group">
            <input
              placeholder="Usuario"
              className="input"
              min="6"
              ref={register({ required: true, minLength: 6, maxLength: 40 })}
              name="username"
            ></input>
            <label>
              <Typography variant="caption" className="text-error-label">
                {errors.username ? "Min 8 caracteres" : ""}
              </Typography>
            </label>
          </div>
          <div className="box-page-login__form__group">
            <input
              placeholder="Nombre"
              className="input"
              ref={register({ required: true })}
              name="name"
            ></input>
            <label>
              <Typography variant="caption" className="text-error-label">
                {errors.name ? "El nombre es requerido" : ""}
              </Typography>
            </label>
          </div>
          <div className="box-page-login__form__group">
            <input
              placeholder="Email"
              className="input"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
              type="email"
              name="email"
            ></input>
            <label>
              <Typography variant="caption" className="text-error-label">
                {errors.email ? "El email es requerido" : ""}
              </Typography>
            </label>
          </div>
          <div className="box-page-login__form__group">
            <input
              placeholder="Contraseña"
              className="input"
              ref={register({ required: true, minLength: 8 })}
              type="password"
              name="password"
            ></input>
            <label>
              <Typography variant="caption" className="text-error-label">
                {errors.password ? "Min 8 caracteres" : ""}
              </Typography>
            </label>
          </div>

          <div className="box-page-login__form__button">
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
        <div className="box-page-login__form__footer">
          <p onClick={props.handleMode}>¿Tienes una cuenta? Inicia Sesión</p>
          <label className="text-error-back">
            <Typography variant="caption">{error}</Typography>
          </label>
        </div>
      </div>
    </div>
  );
};

export default connect(null, null)(FormularioRegistro);
