import React from "react";
import { Container } from "./container";
import { HeaderPerfil } from "../../components/Profile/HeaderPerfil";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../Redux/actions/Perfil";
import { CircularProgress } from "@material-ui/core";

function PerfilAny({ perfil, auth, dispatch, ...props }) {
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
        await dispatch(getUserProfile(username));
        setLoad(false);
      } catch (err) {}
    };
    getDatos();
  }, [username, dispatch]);
  return (
    <>
      {load ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={60} />
        </div>
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
