import React from "react";

import Posts from "./Posts";
import MiniPerfil from "../../Utils/MiniPerfil";
import BoxAmigos from "../../Utils/Box-amigos/BoxAmigos";
import ToFollow from "../../ToFollow/ToFollow";
import { connect } from "react-redux";
import Seacher from "../../../Layout/Header/Search/Search";
import { obtenerPostFollows } from "../../../Redux/actions/actionHome";

import "./home.scss";

function Home(props) {
  const [loadingHome, setLoadingHome] = React.useState(true);

  const { dispatch } = props;

  React.useEffect(() => {
    const getDatos = async () => {
      await dispatch(obtenerPostFollows(props.user._id));

      // setLoadingHome(false);
    };

    getDatos();
  }, []);
  console.log(props.home.allPost.length);

  return (
    <>
      {/* //SECTION */}
      <section className="section-home">
        {/* <Seacher></Seacher> */}
        <div className="section-home__center">
          <BoxAmigos></BoxAmigos>
          <Posts posts={props.home.allPost}></Posts>
        </div>
        {/* MENU DERECHO */}
        <div className="section-home__right">
          <div className="section-home__right__absulute">
            <MiniPerfil></MiniPerfil>
            <ToFollow></ToFollow>
          </div>
        </div>
      </section>
    </>
  );
}
const mapStateToProps = (state, props) => ({
  ui: state.ui,
  user: state.userLogged,
  home: state.home,
});
export default connect(mapStateToProps, null)(Home);
