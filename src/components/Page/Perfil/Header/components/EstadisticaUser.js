import React from "react";
import "./estadistica.scss";

const style = {};
export const EstadisticaUser = (props) => {
  const { userPerfil } = props;

  return (
    <div className="info-header">
      <p>
        <strong>{userPerfil.posts.length}</strong> publicaciones
      </p>
      <p>
        <strong>{userPerfil.numSeguidores}</strong> Seguidores
      </p>
      <p>
        <strong>{userPerfil.numSeguiendo}</strong> Siguiendo
      </p>
    </div>
  );
};
