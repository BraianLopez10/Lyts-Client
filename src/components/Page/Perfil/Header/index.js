import React from "react";
import Media from "react-media";
import { HeaderPerfil } from "./HeaderPefil";
import HeaderPerfilTable from "./HeaderPefilTablet";

export const Header = (props) => {
  const { isAdmin, userPerfil } = props;

  return (
    <Media
      queries={{
        small: "(max-width: 769px)",
        large: "(min-width: 769px)",
      }}
    >
      {(matches) => (
        <div style={{ marginBottom: "15px" }}>
          {matches.small && (
            <HeaderPerfilTable
              userPerfil={userPerfil}
              isAdmin={isAdmin}
            ></HeaderPerfilTable>
          )}
          {matches.large && (
            <HeaderPerfil
              userPerfil={userPerfil}
              isAdmin={isAdmin}
            ></HeaderPerfil>
          )}
        </div>
      )}
    </Media>
  );
};
