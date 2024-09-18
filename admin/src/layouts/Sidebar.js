import React from "react";
import { Link } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerHeader, drawerWidth } from "./components";
import Drawer from "@mui/material/Drawer";
import { Avatar, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import BadgeIcon from '@mui/icons-material/Badge';
import logo from '../assets/images/logo.jpg'

function Sidebar({ open, handleDrawerClose, theme }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader className="d-flex justify-content-between">
      <Avatar
  alt="Remy Sharp"
  src={logo}
  sx={{ width: 56, height: 56 }}
/>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {[
          { title: "Dashboard", path: "/" ,icon:<QueryStatsIcon />},
          { title: "Members", path: "members" ,icon:<BadgeIcon />},
          
        ].map((element, index) => (
          <ListItem key={index} disablePadding>
            <Link to={element.path} className="nav-link w-100">
              <ListItemButton>
                <ListItemIcon>
                 {element.icon}
                </ListItemIcon>
                <ListItemText primary={element.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          { title: "Users", path: "users" ,icon:<PeopleAltIcon />},
          { title: "Settings", path: "settings" ,icon:<SettingsIcon />}
        ].map((element, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {element.icon}
              </ListItemIcon>
              <ListItemText primary={element.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;
