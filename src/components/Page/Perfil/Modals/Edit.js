import React from "react";
import { Modal, Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { connect } from "react-redux";
import "./editperfil.scss";
import { editProfileAction } from "../../../../Redux/actions/actionUser";

const EditPerfil = (props) => {
  const { open, handleClose } = props;
  const imageUser = props.userLogged.img;
  const [name, setName] = React.useState(props.userLogged.name);
  const [bio, setBio] = React.useState(props.userLogged.bio);
  const [imgSrc, setImgSrc] = React.useState(props.userLogged.img);
  const [changueImg, setChangueImg] = React.useState(false);
  const [error, setError] = React.useState({});
  const changueInput = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    else if (e.target.name === "bio") setBio(e.target.value);
  };

  const openDialog = (e) => {
    let inputFile = document.getElementById("input-file");
    inputFile.click();
  };

  const saveChangues = (e) => {
    e.preventDefault();
    let foundError = false;
    if (name === "") {
      foundError = true;
      setError({
        ...error,
        name: "No puede estar vacio",
      });
    }
    if (!foundError) {
      let dataForm = new FormData(document.getElementById("form-edit"));
      if (!changueImg || !dataForm.get("img").name) {
        dataForm.delete("img");
      }
      props
        .dispatch(editProfileAction(dataForm))
        .then(() => props.handleClose());
    }
  };
  const changueImage = (e) => {
    if (e.target.files[0]) {
      let objectUrl = URL.createObjectURL(e.target.files[0]);
      setChangueImg(true);
      setImgSrc(objectUrl);
    } else {
      setChangueImg(false);
      setImgSrc(imageUser);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="modal-edit-p"
    >
      <div className="modal-edit-p__content">
        <div className="modal-edit-p__content__header">
          <ArrowBack
            style={{ cursor: "pointer" }}
            onClick={props.handleClose}
          ></ArrowBack>
          <Button
            type="submit"
            onSubmit={saveChangues}
            variant="contained"
            size="small"
            color="primary"
            onClick={saveChangues}
          >
            Guardar
          </Button>
        </div>
        <div className="modal-edit-p__content__section">
          <form
            id="form-edit"
            className="modal-edit-p__content__section__form"
            encType="multipart/form-data"
          >
            <div
              className="modal-edit-p__content__section__form__image"
              onClick={openDialog}
            >
              <img
                className="modal-edit-p__content__section__form__image-img"
                src={imgSrc}
                style={{ objectFit: "cover" }}
              ></img>
              <input
                type="file"
                className="modal-edit-p__content__section__form__image-input"
                accept="image/*"
                name="img"
                onChange={changueImage}
                id="input-file"
              ></input>
            </div>
            <label className="modal-edit-p__content__section__form-label">
              Nombre
            </label>
            <input
              className="input"
              name="name"
              placeholder="Nombre"
              onChange={changueInput}
              value={name}
            ></input>
            <label className="modal-edit-p__content__section__form-label">
              Biografía
            </label>
            <textarea
              className="input"
              name="bio"
              onChange={changueInput}
              placeholder="Bio"
              value={bio}
            ></textarea>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default connect(null, null)(EditPerfil);
