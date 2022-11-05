import "./maincontainer.css";
import { Grid, Paper } from "@mui/material";

import { useAppSelector } from "../../../store/hooks";

const MainContainer = (props: any) => {
  const reduxTheme: string = useAppSelector((state) => state.theme);

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
