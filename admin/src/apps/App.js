import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import CssBaseline from "@mui/material/CssBaseline";

import { useState } from "react";
import { DrawerHeader, Main } from "../layouts/components";

function App() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className="">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Sidebar
          theme={theme}
          open={open}
          handleDrawerClose={handleDrawerClose}
        />
        <Header open={open} handleDrawerOpen={handleDrawerOpen} />
        <Main open={open}>
          <DrawerHeader />

          <Outlet />
        </Main>
      </Box>
    </div>
  );
}

export default App;
