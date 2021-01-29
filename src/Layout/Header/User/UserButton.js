import React from "react";
import { ButtonBase, Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Logout from "../../../components/Utils/Logout";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

function ExploreButton(props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <ButtonBase
      ref={anchorRef}
      className="link-header"
      aria-controls={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
    >
      <Avatar src={props.userLogged.img}></Avatar>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  style={{ border: "1px solid black", marginTop: "5px" }}
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem disableRipple onClick={handleClose}>
                    <Link
                      size="small"
                      color="secondary"
                      to={"/" + props.userLogged.userName}
                      style={{ textDecoration: "none " }}
                    >
                      <Button
                        size="small"
                        color="primary"
                        fullWidth
                        variant="outlined"
                      >
                        Perfil
                      </Button>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Logout></Logout>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </ButtonBase>
  );
}
const mapStateToProps = (state) => ({
  userLogged: state.auth,
});

export default connect(mapStateToProps, null)(ExploreButton);
