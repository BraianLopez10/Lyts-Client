import React, { useEffect } from "react";
import { Button, CircularProgress } from "@material-ui/core";
//Redux
import { connect } from "react-redux";
import { signin, siginFacebook } from "../../../Redux/actions/actionUser";
import { useForm } from "react-hook-form";
import { FacebookLoginButton } from "react-social-login-buttons";
import { loadFbLoginApi } from "../../../Utils/loadSdkFacebook";
import "./formularioLogin.scss";

loadFbLoginApi();
const FormularioLogin = (props) => {
  useEffect(() => {}, []);
  const handleLoginFb = () => {
    window.FB.login(
      function (response) {
        // handle the response
        console.log(response);
        if (!response.authResponse) return false;
        if (!response.authResponse.accessToken) return false;
        try {
          props.dispatch(siginFacebook(response.authResponse.accessToken));
        } catch {
          console.log("error");
        }
      },
      {
        scope: "public_profile , email ",
      }
    );
  };
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (data) => {
    const { userName, password } = data;
    try {
      setLoading(true);
      let response = await props.dispatch(signin({ userName, password }));
      setLoading(false);
    } catch {
      setLoading(false);
    }
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
          name="userName"
        ></input>
        <label className="text-error-label">
          {errors.userName ? "El usuario es requerido" : ""}
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
            <Button
              variant="contained"
              className="form-login__form__button-button"
              type="submit"
              color="primary"
            >
              Iniciar Sesión
            </Button>
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
            {props.ui.errorLogin && props.ui.errorLogin}
          </label>
        </div>
      </form>
      {/* <FacebookLoginButton onClick={handleLoginFb}></FacebookLoginButton> */}
      {/* <div className="inicio-fb">
        <FacebookLogin
          appId="539588920054034"
          callback={responseFacebook}
          fields="name,email,picture"
          render={(renderProps) => (
            <Button
              className="btn-facebook"
              variant="text"
              startIcon={<FacebookIcon></FacebookIcon>}
              onClick={renderProps.onClick}
            >
              Iniciar sesión con Facebook
            </Button>
          )}
        />
      </div> */}
      <FacebookLoginButton onClick={handleLoginFb}></FacebookLoginButton>
      <div className="form-login__footer">
        <a to="/" className="form-login__footer-a">
          <p>¿Has olvidado la contraseña?</p>
        </a>
        <p className="form-login__footer-p" onClick={props.handleMode}>
          ¿No tienes una cuenta? Registrate
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    ui: state.ui,
  };
};
export default connect(mapStateToProps, null)(FormularioLogin);
