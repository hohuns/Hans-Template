import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

import Avatar from "@mui/material/Avatar";
import StyledBadge from "../StyledBadge";
import MuiThemeSwitch from "../MuiThemeSwitch";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { usersActions } from "../../../store/userSlice";
import "./topbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  let navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const reduxTheme: string = useAppSelector((state) => state.theme);

  // Changing theme according to MuiThemeSwtich
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    let tempTheme;
    if (event.target.checked === true) {
      tempTheme = "themeLight";
      dispatch(usersActions.updateTheme(tempTheme));
    } else if (event.target.checked === false) {
      tempTheme = "themeDark";
      dispatch(usersActions.updateTheme(tempTheme));
    }
  };

  // Reload status of themeSwitch
  useEffect(() => {
    if (reduxTheme === "themeLight") {
      setChecked(true);
    } else if (reduxTheme === "themeDark") {
      setChecked(false);
    }
  }, [reduxTheme]);

  return (
    <div className="navContainer">
      <AppBar
        position="sticky"
        sx={{
          background:
            reduxTheme === "themeLight"
              ? "linear-gradient(to right bottom, #0071a8, #194862)"
              : "#000008",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: "10px",
            }}
            component="div"
          >
            <Typography
              variant="body2"
              component="div"
              gutterBottom
              sx={{ fontSize: "18px", marginTop: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate("/home");
                dispatch(usersActions.updateDashboardIndex(0));
              }}
            >
              HANS TEMPLATE
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <MuiThemeSwitch checked={checked} onChange={handleChange} />
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  sx={{
                    bgcolor: "secondary.main",
                    width: 24,
                    height: 24,
                    border: "1.5px solid white;",
                  }}
                >
                  {/* {makeUserNameForAvatar()} */}
                </Avatar>
              </StyledBadge>
              <Button
                variant="contained"
                startIcon={<LogoutIcon />}
                onClick={() => {
                  localStorage.clear();
                  console.log("logout");
                }}
              >
                Logout
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
