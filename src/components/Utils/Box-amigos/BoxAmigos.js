import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./boxamigos.scss";
import useGetToFollow from "../../../hooks/useGetToFollow";
import ButtonFollow from "../../Utils/ButtonFollow";

function BoxAmigos(props) {
  const [toFollow] = useGetToFollow();
  console.log(toFollow);
  return (
    <React.Fragment>
      {props.follows.length !== 0 ? (
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
                  <p variant="caption">{value.follow.userName}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="toFollow">
          <h4 style={{ textAlign: "center" }}>
            Personas para empezar a seguir 😉
          </h4>
          {toFollow.map((follow, index) => {
            return (
              <>
                <div className="toFollow__content" key={index}>
                  <div className="toFollow__content__info">
                    <Link
                      to={"/" + follow.userName}
                      className="enlace-to-follow"
                    >
                      <Avatar
                        src={follow.img}
                        style={{ width: "30px", height: "30px" }}
                      ></Avatar>
                    </Link>
                    <p className="">{follow.userName}</p>
                    <ButtonFollow
                      variant="text"
                      color="blue"
                      userPerfil={follow}
                    ></ButtonFollow>
                  </div>
                </div>
              </>
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
