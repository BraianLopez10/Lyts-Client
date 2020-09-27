import React from "react";
import { Menu as MenuEdicion } from "./menuEdicion/Menu";
import { EstadisticaUserMobil } from "./components/EstadisticaUserMobil";
import ButtonFollow from "../../../Utils/ButtonFollow";
import Logout from "../../../Utils/Logout";
import "./headerPerfilTable.scss";

export default function HeaderPerfil(props) {
  const { userPerfil, isAdmin } = props;
  return (
    <div className="header-mobile-p">
      <div className="header-mobile-p__header">
        <img
          alt="profile"
          width="120px"
          height="120px"
          className="header-mobile-p__header-img"
          src={userPerfil.img}
        ></img>
      </div>
      <div className="header-mobile-p__buttons">
        {isAdmin ? (
          <div>
            <MenuEdicion userPerfil={userPerfil}></MenuEdicion>
            <Logout></Logout>
          </div>
        ) : (
          <ButtonFollow userPerfil={userPerfil}></ButtonFollow>
        )}
      </div>
      <div className="header-mobile-p__info">
        <p className="header-mobile-p__info-username">@{userPerfil.userName}</p>
        <p className="header-mobile-p__info-p">{userPerfil.name}</p>
        <p className="header-mobile-p__info-desc">{userPerfil.bio}</p>
      </div>
      <div className="header-mobile-p__stats">
        <EstadisticaUserMobil userPerfil={userPerfil}></EstadisticaUserMobil>
      </div>
    </div>
  );
}
