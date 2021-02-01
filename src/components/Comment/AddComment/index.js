import React from "react";
// MATERIALIZEUI
import { Typography, InputBase, ButtonBase } from "@material-ui/core";
//Import Redux
import { connect } from "react-redux";
import { addComment as addCommentRedux } from "../../../Redux/actions/user";
import "./addcomment.scss";

const AddComment = (props) => {
  const [valueInput, setValueInput] = React.useState("");

  const handleInput = (e) => {
    setValueInput(e.target.value);
  };

  const addComment = () => {
    if (valueInput !== "") {
      props.dispatch(
        addCommentRedux(
          props.id,
          valueInput,
          props.auth.username,
          props.auth.img
        )
      );
      setValueInput("");
    }
  };

  const keyPress = (event) => {
    if (event.keyCode === 13) {
      addComment();
    }
  };
  const styles = {
    input: {
      height: "60px",
    },
  };
  return (
    <div className="wrap-add-comment">
      <InputBase
        placeholder="Añade un comentario..."
        value={valueInput}
        fullWidth
        onChange={handleInput}
        onKeyUp={keyPress}
        style={styles.input}
      />

      <ButtonBase
        color="primary"
        onClick={addComment}
        disabled={valueInput === ""}
        style={valueInput === "" ? { color: "#9c9c9c" } : { color: "#3897F1" }}
      >
        <Typography variant="body1" style={{ fontWeight: "bold" }}>
          Publicar
        </Typography>
      </ButtonBase>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, null)(AddComment);
