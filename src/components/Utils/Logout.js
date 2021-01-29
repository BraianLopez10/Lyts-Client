import React from "react";
import { Button } from "@material-ui/core";
import { logout } from "../../Redux/actions/auth";
import { connect } from "react-redux";
function Logout(props) {
  const handleLogout = async () => {
    await props.dispatch(logout());

    window.location.reload();
  };

  return (
    <Button
      size="small"
      color="primary"
      fullWidth
      variant="outlined"
      onClick={handleLogout}
      href="/"
    >
      {" "}
      Salir
    </Button>
  );
}

export default connect(null, null)(Logout);
