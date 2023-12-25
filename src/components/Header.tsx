import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavLink from "./shared/NavLink";
import { useRef } from "react";

const Header = () => {
  const auth = useAuth();
  // console.log(auth?.isLoggedIn);
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavLink
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NavLink
                bg="#51538f"
                to="/"
                text="logout"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
            <NavLink
                bg="#00fffc"
                to="/login"
                text="Login"
                textColor="black"
              />
              <NavLink
                bg="#51538f"
                to="/signup"
                text="SignUp"
                textColor="white"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
