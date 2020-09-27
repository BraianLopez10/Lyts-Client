import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Page from "../Layout/Page";
import Login from "../components/Page/Login";
import { Chargue } from "../components/Chargue";
import { setAuthorization } from "../Redux/actions/actionUi";
import { getDataUserLogged } from "../Redux/actions/actionUser";
import { getToken } from "../services/AuthJwt";

const ProtectedRoute = ({ component: Component, ui, dispatch, ...rest }) => {
  const [loading, setLoading] = React.useState(true);
  //Hasta q el id no este seteado no puede arrancar la app
  React.useEffect(() => {
    const isLogged = async () => {
      const idUser = getToken();
      if (idUser) {
        if (!ui.authorization) {
          await dispatch(getDataUserLogged());
          await dispatch(setAuthorization(true));
        }
      }
      setLoading(false);
    };
    isLogged();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ui.authorization]);

  return (
    <React.Fragment>
      <Route
        {...rest}
        render={(props) => {
          if (!loading) {
            if (ui.authorization) {
              return (
                <Page {...props}>
                  <Component {...props}></Component>
                </Page>
              );
            } else {
              return <Login></Login>;
            }
          } else {
            return <Chargue></Chargue>;
          }
        }}
      ></Route>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    ui: state.ui,
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
