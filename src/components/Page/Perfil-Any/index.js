import React from "react";
import { Container } from "./container";
import { HeaderPerfil } from "../../HeaderPerfil";
import { connect } from "react-redux";
import { CircularProgress, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../Redux/actions/Perfil";

function PerfilAny({ perfil, auth, ...props }) {
  const [userNoFound, setUserNoFound] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  const { username } = useParams();

  let isAdmin;
  if (username === auth.username) {
    isAdmin = true;
  } else {
    isAdmin = false;
  }

  React.useEffect(() => {
    const getDatos = async () => {
      try {
        await props.dispatch(getUserProfile(username));
        setLoad(false);
      } catch (err) {
        setUserNoFound(true);
      }
    };
    getDatos();
  }, [username]);
  return (
    <>
      {load ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <HeaderPerfil isAdmin={isAdmin} userPerfil={perfil}></HeaderPerfil>
          <Container posts={perfil.posts}></Container>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth,
    perfil: state.perfil,
  };
};

export default connect(mapStateToProps, null)(PerfilAny);
