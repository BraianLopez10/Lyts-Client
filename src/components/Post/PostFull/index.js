import React, { useEffect } from "react";
import { Typography, Avatar, Button } from "@material-ui/core";
import ButtonLike from "../ButtonLike";
import ButtonComment from "../../../components/Comment/ButtonComment";
import { BoxComments } from "../../Comment/BoxComments";
import AddComment from "../../../components/Comment/AddComment";
import { connect } from "react-redux";
import ButtonFollow from "../../../components/Profile/ButtonFollow";
import { DeleteOutlineOutlined } from "@material-ui/icons";
import { deletePost as deletePostRedux } from "../../../Redux/actions/user";

import "./style.scss";

const PostFull = (props) => {
  const [isAdmin, setIsAdmin] = React.useState(false);
  useEffect(() => {
    if (props.userLogged.id === props.post.user._id) setIsAdmin(true);
  }, [props.post.user._id, props.userLogged.id]);

  const deletePost = async (idPost) => {
    try {
      await props.dispatch(deletePostRedux(idPost));
    } catch (err) {
      console.log(err);
      alert("No se pudo borrar , intentalo más tarde");
    }
  };
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
                <Button
                  onClick={() => {
                    deletePost(props.post._id);
                  }}
                >
                  <DeleteOutlineOutlined></DeleteOutlineOutlined>
                </Button>
              </div>
            ) : (
              <ButtonFollow idUser={props.post.user._id}></ButtonFollow>
            )}
          </div>
          <BoxComments
            comments={props.post.comments}
            className=""
          ></BoxComments>
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
  userLogged: state.auth,
});

export default connect(mapStateToProps, null)(PostFull);
