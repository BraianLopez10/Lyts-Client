import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import ButtonFollow from "../ButtonFollow";
import { EstadisticaUser } from "./components/EstadisticaUser";
import EditMenu from "../../../Modals/EditPerfil";

import "./style.scss";

export const HeaderPerfil = ({ userPerfil, isAdmin }) => {
  const [handleOpen, setHandleOpen] = useState(false);

  const handleClose = () => {
    setHandleOpen(false);
  };
  const editForm = () => {
    setHandleOpen(!handleOpen);
  };
  return (
    <div className="header-perfil">
      <div className="header-perfil__image">
        <Avatar
          src={userPerfil.img}
          style={{ width: "130px", height: "130px" }}
        ></Avatar>
        <div style={{ marginTop: "5px" }}>
          {!isAdmin && <ButtonFollow idUser={userPerfil._id}></ButtonFollow>}
        </div>
      </div>
      <div className="header-perfil__content">
        {isAdmin && (
          <div className="header-perfil__content__option">
            <EditMenu open={handleOpen} handleClose={handleClose} />
            <Button onClick={editForm} color="primary" variant="contained">
              Editar Perfil
            </Button>
          </div>
        )}
        <div className="header-perfil__content__info">
          <p>@{userPerfil.username}</p>
          <p>{userPerfil.name}</p>
          <p style={{ fontFamily: "cursive" }}>
            {userPerfil.bio || "Agrega una biografía"}
          </p>
        </div>
        <div className="header-perfil__content__stats">
          <EstadisticaUser userPerfil={userPerfil}></EstadisticaUser>
        </div>
      </div>
    </div>
  );
};
