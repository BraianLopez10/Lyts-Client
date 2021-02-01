import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Page from "../Layout/Page";
import Login from "../page/Login";
import { setAuth, setId } from "../Redux/actions/auth";
import { getDataUserLogged } from "../Redux/actions/auth";
import { getToken } from "../services/AuthJwt";

const ProtectedRoute = ({ component: Component, auth, dispatch, ...rest }) => {
  const [loading, setLoading] = React.useState(true);
  //Hasta q el id no este seteado no puede arrancar la app
  React.useEffect(() => {
    const isLogged = async () => {
      const idUser = getToken();
      if (idUser) {
        if (!auth.authorization) {
          await dispatch(getDataUserLogged());
          await dispatch(setAuth(true));
          await dispatch(setId(idUser));
        }
      }
      setLoading(false);
    };
    isLogged();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.authorization]);

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (!loading) {
            if (auth.authorization) {
              return (
                <Page {...props}>
                  <Component {...props}></Component>
                </Page>
              );
            } else {
              return <Login></Login>;
            }
          }
        }}
      ></Route>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
