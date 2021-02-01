import React, { useState } from "react";

import Posts from "../../components/Post/Posts";
import MiniPerfil from "../../components/Profile/MiniPerfil";
import BoxAmigos from "../../components/Profile/BoxAmigos";
import ToFollow from "../../components/Profile/ToFollow";
import { connect } from "react-redux";
import { getFeed } from "../../Redux/actions/home";
import { CircularProgress } from "@material-ui/core";
import "./home.scss";

function Home({ home, dispatch, ...props }) {
  const [load, setLoad] = useState(true);
  React.useEffect(() => {
    const getDatos = async () => {
      await dispatch(getFeed());
      setLoad(false);
    };
    getDatos();
  }, [dispatch]);

  return (
    <section className="section-home">
      {load ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <CircularProgress size={60}></CircularProgress>
        </div>
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
