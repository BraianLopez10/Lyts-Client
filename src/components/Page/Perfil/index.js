import React from "react";
import { ContentSection } from "./Section";
import { Header } from "./Header";
import { connect } from "react-redux";
import { CircularProgress, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../Redux/actions/actionData";
function Perfil(props) {
  const [loadingUi, setLoadingUi] = React.useState(true);
  const [userNoFound, setUserNoFound] = React.useState(false);
  const [userAdmin, setUserAdmin] = React.useState(false);
  const { username } = useParams();
  React.useEffect(() => {
    const getDatos = async () => {
      //Obtenemos el nombre de la url
      setLoadingUi(true);
      if (username) {
        if (username === props.userLogged.userName) {
          setUserAdmin(true);
          setLoadingUi(false);
        } else {
          try {
            await props.dispatch(getUserProfile(username));
            setUserAdmin(false);
            setLoadingUi(false);
          } catch (err) {
            setUserNoFound(true);
            setLoadingUi(false);
          }
        }
      }
    };
    getDatos();
  }, [props.location]);

  const renderPerfil = () => {
    return (
      <div className="perfil-wrapper">
        {/* HEADER */}
        <div className="perfil-wrapper__header">
          <Header
            userPerfil={userAdmin ? props.userLogged : props.anyPerfil.user}
            isAdmin={userAdmin}
          ></Header>
        </div>
        {/* SECTION PERFIL */}
        <div className="perfil-wrapper__section">
          {loadingUi ? (
            <CircularProgress></CircularProgress>
          ) : (
            <ContentSection
              userPosts={
                userAdmin ? props.userLogged.posts : props.anyPerfil.user.posts
              }
            ></ContentSection>
          )}
        </div>
      </div>
    );
  };
  return (
    <div>
      {/* HEADER PERFIL */}
      {loadingUi ? (
        <CircularProgress></CircularProgress>
      ) : userNoFound ? (
        <Typography variant="h4">
          El usuario no existe <span>😯</span>
        </Typography>
      ) : (
        renderPerfil()
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    userLogged: state.userLogged,
    anyPerfil: state.anyPerfil,
  };
};

export default connect(mapStateToProps, null)(Perfil);
