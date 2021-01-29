import React from "react";
import { Button } from "@material-ui/core";

//Action Redux
import { connect } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NoFavoriteIcon from "@material-ui/icons/FavoriteBorder";
// import { disLike, like } from "../../../../Redux/actions/actionData";

const ButtonLike = (props) => {
  const { isLiked, numLikes, post_id } = props;

  return (
    <div>
      {isLiked ? (
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            // props.dispatch(disLike(post_id))
            console.log("Like");
          }}
        >
          <FavoriteIcon></FavoriteIcon>
          {numLikes}
        </Button>
      ) : (
        <Button
          size="small"
          color="secondary"
          onClick={() => {
            // props.dispatch(like(post_id))
            console.log("Like");
          }}
        >
          <NoFavoriteIcon></NoFavoriteIcon>
          {numLikes}
        </Button>
      )}
    </div>
  );
};
export default connect(null, null)(ButtonLike);
