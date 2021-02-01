import React, { useRef } from "react";
import "./index.scss";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { addPost } from "../../../Redux/actions/user";
import { connect } from "react-redux";

const AddPhoto = (props) => {
  const [text, setText] = React.useState("");
  const [error, seterror] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const file = useRef(null);
  const form = useRef(null);

  const changeInput = (e) => {
    setText(e.target.value);
  };
  const openFile = () => {
    file.current.click();
  };
  const close = () => {
    props.handleClose();
  };
  const setImageUrl = (e) => {
    if (!e.target.files[0]) return false;
    let image = URL.createObjectURL(e.target.files[0]);
    setImage(image);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return false;
    let formData = new FormData(form.current);

    setLoading(true);
    props
      .dispatch(addPost(formData))
      .then(() => {
        setLoading(false);
        setText(null);
        setImage(null);
        close();
      })
      .catch(() => {
        seterror("El tamaño de la foto es muy grande , max 2MB");
        setLoading(false);
      });
  };

  if (!props.open) return false;
  return (
    <div className="add-photo">
      <div className="add-photo__content">
        <div className="add-photo__content__header">
          <h1 className="add-photo__content__header-h1">Agrega tu foto</h1>
          <button onClick={close}>X</button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="add-photo__content__body"
          ref={form}
        >
          <input
            placeholder="Titulo"
            className="input"
            name="titlePost"
            onChange={changeInput}
          ></input>
          <input
            type="file"
            ref={file}
            name="img"
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
            onChange={setImageUrl}
          ></input>
          <img
            className="add-photo__content__body-img"
            height="200px"
            src={image ? image : "upload.png"}
            width="200px"
            alt="add"
            onClick={openFile}
          ></img>
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Button
              fullWidth
              style={{ color: "black" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Subir Imagen
            </Button>
          )}
          {error.length > 0 && (
            <Typography style={{ color: "white" }} variant="caption">
              {error}
            </Typography>
          )}
        </form>
      </div>
    </div>
  );
};
export default connect(null, null)(AddPhoto);
