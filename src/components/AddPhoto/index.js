import React, { useRef } from "react";
import "./index.scss";
import { Button } from "@material-ui/core";
import { addPost } from "../../Redux/actions/actionUser";
import { connect } from "react-redux";
const AddPhoto = (props) => {
  const [text, setText] = React.useState("");
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
    props
      .dispatch(addPost(formData))
      .then(() => {
        window.location.reload();
      })
      .catch(() => {});
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
            src={image}
            width="200px"
            onClick={openFile}
          ></img>
          <Button
            style={{ color: "white" }}
            fullWidth
            color="secondary"
            variant="outlined"
            onClick={handleSubmit}
          >
            Subir Imagen
          </Button>
        </form>
      </div>
    </div>
  );
};
export default connect(null, null)(AddPhoto);
