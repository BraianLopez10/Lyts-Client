import React from "react";
import { Typography, Card, CardContent, Box, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./boxamigos.scss";

function BoxAmigos(props) {
  return (
    <React.Fragment>
      {
        props.follows.length !== 0 && (
          <div className="box-amigos-section">
            {props.follows.map((value, index) => {
              return (
                <div key={index} className="wrap-user-box">
                  <Link
                    className="avatar-box-section"
                    to={"/" + value.follow.userName}
                  >
                    <div>
                      <Avatar className="avatar" src={value.follow.img}></Avatar>
                    </div>
                    <p variant="caption">
                      {value.follow.userName}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
    </React.Fragment>
  );
}



const mapStateToProps = (state, props) => ({
  follows: state.userLogged.follows,
});

export default connect(mapStateToProps, {})(BoxAmigos);
