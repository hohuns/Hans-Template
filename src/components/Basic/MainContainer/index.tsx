import "./maincontainer.css";
import { Grid, Paper, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicBreadcrumbs from "../BreadScrum/index";
import Button from "@mui/material/Button";
import { useAppSelector } from "../../../store/hooks";

const MainContainer = (props: any) => {
  const location = useLocation();
  const [breadScrumTitle, setBreadScrumTitle] = useState<string>("");
  const reduxTheme: string = useAppSelector((state) => state.theme);

  // Getting bread scrum title whenever pathname is changed
  useEffect(() => {
    const makebreadScrumTitle = () => {
      let tempLocName = location.pathname.toString();
      tempLocName = tempLocName.charAt(1).toUpperCase() + tempLocName.slice(2);
      setBreadScrumTitle(tempLocName);
    };
    makebreadScrumTitle();
  }, [location.pathname]);

  return (
    <div className="mainContainer">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Paper
            elevation={8}
            sx={{
              borderRadius: "8px",
              display: "flex",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <Grid item xs={12} sm={12} sx={{ padding: "10px" }}>
              {props.children}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <footer className="footer" style={{ marginTop: "15px" }}>
        {reduxTheme === "themeLight" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>&copy;2022 JOO SUNG JAE HANS All right reserved.</p>
            <p>0.0.1 Light theme</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "white" }}>
              &copy; 2022 JOO SUNG JAE HANS All right reserved.
            </p>
            <p style={{ color: "white" }}>0.0.1 Dark theme</p>
          </div>
        )}
      </footer>
    </div>
  );
};

export default MainContainer;
