import { Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Searcher } from "./Searcher";
import { getExplorer } from "../../Redux/actions/user";
import { connect } from "react-redux";
import CardList from "./CardUser";
import ExplorerPost from "./ExplorerPost";
function Explorer({ dispatch, explorer, ...props }) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(getExplorer());
      } catch {}
      setloading(false);
    };
    getData();
  }, [dispatch]);
  return (
    <div>
      <Typography variant="body">Descubre gente nueva</Typography>
      <Searcher />
      <div>
        <div style={{ height: "300px", overflowY: "scroll" }}>
          <Typography variant="body1">Personas para seguir</Typography>
          <CardList users={explorer.users}></CardList>
        </div>
        <div style={{ marginTop: "50px" }}>
          <Typography variant="body1">Publicaciones recientes</Typography>
          <ExplorerPost posts={explorer.posts}></ExplorerPost>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    explorer: state.explorer,
  };
};
export default connect(mapStateToProps, null)(Explorer);
