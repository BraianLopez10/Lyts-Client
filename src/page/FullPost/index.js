import React from "react";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import ViewPostMobile from "../../components/Post/PostFull";
import { connect } from "react-redux";
import { getPost as getPostRedux } from "../../Redux/actions/post";
import { useParams } from "react-router-dom";

function FullPost({ dispatch, ...props }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const { idPost } = useParams();

  React.useEffect(() => {
    const getPost = async () => {
      try {
        await dispatch(getPostRedux(idPost));
      } catch (err) {
        setError(true);
        setIsLoaded(true);
      }
      setIsLoaded(true);
    };
    getPost();
  }, [dispatch, idPost]);

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        {isLoaded ? (
          error ? (
            <Typography variant="body1" align="center">
              El post no existe :(
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
    post: state.post,
  };
};

export default connect(mapStateToProps, null)(FullPost);
