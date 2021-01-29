import React, { useState } from "react";

import Posts from "../../Posts";
import MiniPerfil from "../../Utils/MiniPerfil";
import BoxAmigos from "../../Utils/Box-amigos/BoxAmigos";
import ToFollow from "../../ToFollow/ToFollow";
import { connect } from "react-redux";
import { getFeed } from "../../../Redux/actions/home";

import "./home.scss";

function Home({ home, ...props }) {
  const [load, setLoad] = useState(true);
  React.useEffect(() => {
    const getDatos = async () => {
      await props.dispatch(getFeed());
      setLoad(false);
    };
    getDatos();
  }, []);

  return (
    <section className="section-home">
      {load ? (
        <h1>Cargadon</h1>
      ) : (
        <>
          <div className="section-home__center">
            <BoxAmigos></BoxAmigos>
            <Posts posts={home.postsFollow}></Posts>
          </div>
          <div className="section-home__right">
            <div className="section-home__right__absulute">
              <MiniPerfil></MiniPerfil>
              <ToFollow toFollow={home.toFollow}></ToFollow>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
const mapStateToProps = (state, props) => ({
  home: state.home,
});
export default connect(mapStateToProps, null)(Home);
