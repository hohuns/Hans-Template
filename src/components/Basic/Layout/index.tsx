import Navbar from "../Topbar/index";
import Sidebar from "../SideBar";
import MainContainer from "../MainContainer";
import ReactDataGridEx from "../../MainContainerTemplate";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar />
        {/* rendering corresponding child elements according to location url */}
        <MainContainer>
          {location.pathname === "/home" && <ReactDataGridEx />}
          {location.pathname === "/logo1" && <ReactDataGridEx />}
          {location.pathname === "/logo2" && <ReactDataGridEx />}
          {location.pathname === "/logo3" && <ReactDataGridEx />}
        </MainContainer>
      </div>
    </>
  );
};

export default Layout;
