import React from "react";
import { Typography } from "@material-ui/core";
export const EstadisticaUserMobil = props => {
  const { userPerfil } = props;
  return (
    <React.Fragment>
      <Typography
        variant="subtitle1"
        style={{ marginLeft: "10px" }}
        display="inline"
      >
        <strong>{userPerfil.posts.length}</strong> publicaciones
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ marginLeft: "10px" }}
        display="inline"
      >
        <strong>{userPerfil.numSeguidores}</strong> Seguidores
      </Typography>
      <Typography
        variant="subtitle1"
        style={{ marginLeft: "10px" }}
        display="inline"
      >
        <strong>{userPerfil.numSeguiendo}</strong> Siguiendo
      </Typography>
    </React.Fragment>
  );
};
