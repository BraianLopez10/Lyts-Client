import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import ButtonFollow from "../../../Utils/ButtonFollow";
import { Menu } from "./menuEdicion/Menu";
import { UserName } from "./components/UserName";
import { UserBio } from "./components/UserBio";
import { EstadisticaUser } from "./components/EstadisticaUser";
import "./headerperfil.scss";

export const HeaderPerfil = (props) => {
  const { userPerfil, isAdmin } = props;

  return (
    <div className="header-perfil">
      <div className="header-perfil__image">
        <Avatar
          className="header-perfil__image-avatar"
          src={userPerfil.img}
          style={{ width: "130px", height: "130px" }}
        ></Avatar>
        {isAdmin ? (
          <React.Fragment>
            <Menu userPerfil={userPerfil}></Menu>
          </React.Fragment>
        ) : (
          <ButtonFollow userPerfil={userPerfil}></ButtonFollow>
        )}
      </div>
      <div className="header-perfil__content">
        <div className="header-perfil__content__info">
          <p>@{userPerfil.userName}</p>
          <p className="header-perfil__content__info-p">{userPerfil.name}</p>
          <p className="header-perfil__content__info-p">{userPerfil.bio}</p>
        </div>
        <div className="header-perfil__content__stats">
          <EstadisticaUser userPerfil={userPerfil}></EstadisticaUser>
        </div>
      </div>
    </div>
  );
};
