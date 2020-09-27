import React from "react";
import { Typography } from "@material-ui/core";

export const UserName = (props) => {
  const { userPerfil } = props;
  return (
    <React.Fragment>
      <Typography
        variant="caption"
        style={{ textTransform: "capitalize", fontSize: "20px", color: "grey" }}
      >
        @{userPerfil.name}
      </Typography>
    </React.Fragment>
  );
};
