import React, { useState } from "react";

import { Button } from "@material-ui/core";

import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { setFollow, unSetFollow } from "../../Redux/actions/user";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonFollow = ({ idUser, userLogged, ...props }) => {
  const classes = useStyles();
  const res = userLogged.follows.find((f) => f._id === idUser);
  let initialValue;
  if (res) {
    initialValue = true;
  } else {
    initialValue = false;
  }

  const [follow, setFollowState] = useState(initialValue);
  const handleFollow = async () => {
    try {
      await props.dispatch(setFollow(idUser));
      setFollowState(true);
    } catch {}
  };
  const handleUnFollow = async () => {
    try {
      await props.dispatch(unSetFollow(idUser));
      setFollowState(false);
    } catch (error) {}
  };
  return (
    <React.Fragment>
      {!follow ? (
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
  userLogged: state.auth,
});

export default connect(mapStateToProps, null)(ButtonFollow);
