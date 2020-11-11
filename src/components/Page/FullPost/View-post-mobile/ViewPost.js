import React, { useEffect } from "react";
import { Typography, Avatar, Button } from "@material-ui/core";
import ButtonLike from "../../../Utils/Post/Like/ButtonLike";
import ButtonComment from "../../../Utils/Post/Comentario/ButtonComment";
import { Comments } from "./Comments";
import AddComment from "../../../Utils/Post/Comentario/AddComment";
import { connect } from "react-redux";
import ButtonFollow from "../../../Utils/ButtonFollow";
import "./style.scss";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import api from '../../../../services/consultaApi'

const ViewPost = (props) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  useEffect(() => {
    if (props.userLogged._id === props.post.user._id) setIsAdmin(true);
  }, [props.post.user._id]);

  const deletePost = async (idPost) => {

    try {
      await api.deletePost(idPost);
      window.location.reload()
    }catch {
      alert("No se pudo borrar , intentalo más tarde")
    }

  }
  return (
    <div className="wrap-fullpost">
      <div className="image-full-post">
        <img
          src={props.post.img}
          alt={props.post.caption}
          height="600px"
          width="600px"
        ></img>
      </div>
      <div className="menu-right">
        <div className="menu-right-top">
          <div className="info-full-post">
            <Avatar src={props.post.user.img}></Avatar>
            <Typography>{props.post.user.userName}</Typography>
            {isAdmin ? (
              <div className="button-opciones">
                <Button onClick={ () => {
                  deletePost(props.post._id)
                }}>
                  <DeleteOutlineOutlined
                  ></DeleteOutlineOutlined>
                </Button>
              </div>
            ) : (
              <ButtonFollow userPerfil={props.post.user}></ButtonFollow>
            )}
          </div>
          <Comments comments={props.post.comments} className=""></Comments>
        </div>
        <div className="menu-right-bottom">
          <div className="title-comment">
            <ButtonLike
              isLiked={props.post.isLike}
              numLikes={props.post.numLikes}
              post_id={props.post._id}
            ></ButtonLike>
            <ButtonComment
              numComentarios={props.post.numComentarios}
            ></ButtonComment>
          </div>
          <div>
            <AddComment id={props.post._id}></AddComment>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userLogged: state.userLogged,
});

export default connect(mapStateToProps, null)(ViewPost);
