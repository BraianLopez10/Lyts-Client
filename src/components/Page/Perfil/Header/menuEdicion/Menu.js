import React from "react";
import EditPerfil from "../../Modals/Edit";
import { Button } from "@material-ui/core";

export const Menu = (props) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const { userPerfil } = props;
  return (
    <React.Fragment>
      <EditPerfil
        open={openModal}
        handleClose={handleCloseModal}
        userLogged={userPerfil}
      ></EditPerfil>
      <div className="editarButton">
        <Button
          color="primary"
          variant="contained"
          size="small"
          style={{ marginBottom: "5px" }}
          fullWidth
          onClick={handleOpenModal}
        >
          Editar Perfil
        </Button>
      </div>
    </React.Fragment>
  );
};
