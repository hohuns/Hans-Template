import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { usersActions } from "../../store/userSlice";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import DrawerComponent from "../Drawer";
export default function SelectedListItem() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const reduxDashboardIndex: number = useAppSelector(
    (state) => state.dashboardIndex
  );
  const [selectedIndex, setSelectedIndex] =
    useState<number>(reduxDashboardIndex);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // routing for sidebar to each coressponding components
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    if (index === 0) {
      navigate("/home");
      setSelectedIndex(index);
      dispatch(usersActions.updateDashboardIndex(index));
    } else if (index === 1) {
      navigate("/logo1");
      setSelectedIndex(index);
      dispatch(usersActions.updateDashboardIndex(index));
    } else if (index === 2) {
      navigate("/logo2");
      setSelectedIndex(index);
      dispatch(usersActions.updateDashboardIndex(index));
    } else if (index === 3) {
      navigate("/logo3");
      setSelectedIndex(index);
      dispatch(usersActions.updateDashboardIndex(index));
    }
  };

  // Prevent malfunction indexing for refreshing
  useEffect(() => {
    if (reduxDashboardIndex === 0) {
      navigate("/home");
    }
  }, [reduxDashboardIndex, navigate]);

  return (
    <>
      {!matches ? (
        <Box
          sx={{
            width: "100%",
            height: "calc(100vh - 50px)",
            maxWidth: 250,
            bgcolor: "background.paper",
            marginTop: "20px",
            borderRight: "1px solid black",
            padding: "20px",
          }}
        >
          <List component="nav" aria-label="second folders">
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
            >
              <ListItemIcon>
                <HomeIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
            <Divider />
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
              sx={{ marginTop: "10px" }}
            >
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Logo1" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemIcon>
                <NoteAltIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Logo2" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemIcon>
                <PrecisionManufacturingIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary="Logo3" />
            </ListItemButton>
          </List>
        </Box>
      ) : (
        <Box
          sx={{
            height: "calc(100vh - 50px)",
            Width: "10px",
            bgcolor: "background.paper",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRightIcon
            onClick={() => {
              setOpenDrawer(true);
            }}
          />
          <DrawerComponent
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        </Box>
      )}
    </>
  );
}
