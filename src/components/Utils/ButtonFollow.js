import React from "react";

import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { setFollow, unSetFollow } from "../../Redux/actions/actionUser";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonFollow = (props) => {
  const { userPerfil, userLogged } = props;
  const [followState, setFollowState] = React.useState(false);

  React.useEffect(() => {
    let index = userLogged.follows.findIndex(
      (follow) => follow.follow._id === userPerfil._id
    );
    if (index === -1) {
      setFollowState(false);
    } else {
      setFollowState(true);
    }
  }, [userPerfil._id]);
  const classes = useStyles();

  const handleFollow = async () => {
    props.dispatch(setFollow(userPerfil)).then(() => {
      setFollowState(true);
    }).catch((err) => {
      console.log(err);
    });
  };
  const handleUnFollow = async () => {
    props
      .dispatch(unSetFollow(userPerfil))
      .then(() => {
        setFollowState(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <React.Fragment>
      {!followState ? (
        <Button
          variant={props.variant || "contained"}
          size="small"
          color="inherit"
          className={classes.margin}
          onClick={handleFollow}

        >
          Seguir
        </Button>
      ) : (
          <Button
            variant={props.variant || "contained"}
            size="small"
            color="primary"
            className={classes.margin}
            onClick={handleUnFollow}
          >
            Siguiendo
          </Button>
        )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  userLogged: state.userLogged,
});

export default connect(mapStateToProps, null)(ButtonFollow);
