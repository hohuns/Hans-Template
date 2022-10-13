import "./maincontainer.css";
import { Grid, Paper, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BasicBreadcrumbs from "../BreadScrum/index";
import Button from "@mui/material/Button";

const MainContainer = (props: any) => {
  const location = useLocation();
  const [breadScrumTitle, setBreadScrumTitle] = useState<string>("");

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
            <Grid item xs={12} sm={12}>
              <Toolbar
                sx={{
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "primary.main",
                  gap: "10px",
                  padding: "15px",
                }}
              >
                <Grid item xs={12} sm={3}>
                  <BasicBreadcrumbs breadScrumTile={breadScrumTitle} />
                </Grid>
                <Grid item xs={12} sm={1.5}>
                  <Button variant="outlined" fullWidth={true}>
                    Load Data
                  </Button>
                </Grid>
                <Grid item xs={12} sm={1.5}>
                  <Button variant="outlined" fullWidth={true}>
                    Clear Data
                  </Button>
                </Grid>
                <Grid item xs={12} sm={1.5}>
                  <Button variant="outlined" fullWidth={true}>
                    Exports
                  </Button>
                </Grid>
              </Toolbar>
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              sx={{ marginTop: "20px", padding: "10px" }}
            >
              {props.children}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <footer className="footer" style={{ marginTop: "15px" }}>
        <p>&copy; SUNG JAE JOO HANS ALL RIGHT RESERVE</p>
      </footer>
    </div>
  );
};

export default MainContainer;
