import React from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import ViewPostMobile from "./View-post-mobile/ViewPost";
import { connect } from "react-redux";
import { getPost as getPostRedux } from "../../../Redux/actions/actionData";
import { useParams } from "react-router-dom";

function FullPost(props) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { idPost } = useParams();
  console.log(idPost);
  React.useEffect(() => {
    const getPost = async () => {
      try {
        await props.dispatch(getPostRedux(idPost));
      } catch (err) {
        setError(true);
        setIsLoaded(true);
      }
      setIsLoaded(true);
    };
    getPost();
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        {isLoaded ? (
          error ? (
            <Typography variant="body1" align="center">
              El post no existe
            </Typography>
          ) : (
            <ViewPostMobile post={props.post}></ViewPostMobile>
          )
        ) : (
          <CircularProgress></CircularProgress>
        )}
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state, props) => {
  return {
    ui: state.ui,
    post: state.anyPerfil.post,
    follows: state.userLogged.follows,
  };
};

export default connect(mapStateToProps, null)(FullPost);
