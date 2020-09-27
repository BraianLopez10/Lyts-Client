import React from "react";
import { Typography } from "@material-ui/core";
export const UserBio = (props) => {
  const { userPerfil } = props;
  return (
    <React.Fragment>
      <Typography
        variant="caption"
        style={{ marginTop: "50px", fontSize: "20px" }}
      >
        {userPerfil.bio}
      </Typography>
    </React.Fragment>
  );
};
