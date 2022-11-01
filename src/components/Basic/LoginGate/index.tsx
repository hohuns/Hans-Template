import { useKeycloak } from "@react-keycloak/web";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

const LoginGate = ({ children }: any) => {
  const { keycloak } = useKeycloak();
  const isLoggedIn = keycloak.authenticated;

  // If User did not have token then it will show null
  return isLoggedIn ? (
    children
  ) : (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress disableShrink />
    </div>
  );
};

export default LoginGate;
