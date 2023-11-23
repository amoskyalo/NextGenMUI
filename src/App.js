import { useState } from "react";
import SideBarModel from "./lib/components/SideBar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LinkIcon from '@mui/icons-material/Link';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import Divider from "@mui/material/Divider";

import { Route, Routes } from "react-router-dom";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import MenuIcon from '@mui/icons-material/Menu';

import { Box, IconButton, Typography } from "@mui/material";

import logo from './Assets/logo3.png'

function App() {
  const [open, setOpen] = useState(true)

  const navigation = [
    {
      name: "Dashboard",
      icon: DashboardIcon,
      path: '/',
      renderList: (params) => {
        // console.log(params)
        // return (
        //   <p>{params.name}</p>
        // )
      }
    },
    {
      name: "Clients",
      icon: GroupIcon,
      path: "/dashboard/clients"
    },
    {
      name: "Projects",
      icon: AccountTreeIcon,
      path: "/projects"
    },
    {
      name: "Engagements",
      icon: LinkIcon,
      path: "/engagement"
    },
    {
      name: "Tasks",
      icon: TaskIcon,
      path: "/tasks"
    },
    {
      name: "Worklogs",
      icon: DataThresholdingIcon,
      path: "/worklogs",
      subLinks: [
        {
          name: "User Data",
          icon: AccountBalanceIcon,
          path: "/worklogs/user-data",
          renderList: (params) => {
            console.log(params)
            // return (
            //   <p>{params.name}</p>
            // )
          }
        },
        {
          name: "Client Statistics",
          icon: ManageHistoryIcon,
        }
      ]
    }
  ];

  const nav = {
    sections: [
      {
        title: "Overview",
        list: [...navigation],
      },
      {
        title: "Accounts",
        list: [
          {
            name: "Chat",
            icon: ChatBubbleIcon
          },
          {
            name: "Settings",
            icon: SettingsIcon
          },
          {
            name: "Logout",
            icon: LogoutIcon
          }
        ]
      }
    ]
  }

  const NavHeader = () => {
    return (
      <Box marginBottom={3} width={"100%"}>
        <Box display={"flex"} paddingY={2} justifyContent={open ? "space-between" : "center"} width={"100%"}>
          {open &&
            <Box display={"flex"} columnGap={1}>
              <img src={logo} style={{ flex: 1, height: 45 }} />
              <Box>
                <Typography variant="h6" sx={{ fontSize: 16 }}>Softech</Typography>
                <Typography variant="h6" sx={{ fontSize: 14, opacity: "30%" }}>Technology</Typography>
              </Box>
            </Box>
          }
          <IconButton onClick={() => setOpen(!open)}>
            <MenuIcon sx={{ color: "#c8cecf" }} />
          </IconButton>
        </Box>
        <Divider color={"#395759"} />
      </Box>
    )
  }

  return (
    <Box display={"flex"} columnGap={4}>
      <SideBarModel
        navigateItems={nav}
        NavHeader={NavHeader}
        openHeader={open}
        activeTabBackgroundColor="#395759"
        backgroundColor="#001d25"
        textColor="#c8cecf"
      />

      <Box sx={{
        border: "1px solid red",
        flex: 1
      }}>
        <Routes>
          <Route path="/"
            element={<div>Dashboard</div>}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
