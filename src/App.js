import { useState } from "react";
import SideBarModel from "./lib/components/SideBar";
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LinkIcon from '@mui/icons-material/Link';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TaskIcon from '@mui/icons-material/Task';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import Divider from "@mui/material/Divider";
import GridModel from "./lib/components/Grids/GridModel";
import DialogModel from "./lib/components/Dialog/DialogModel";
import CalenderModel from "./lib/components/Calender";
import { Route, Routes } from "react-router-dom";

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PopoverModel from "./lib/components/Popovers/PopoverModel";
import AssessmentIcon from '@mui/icons-material/Assessment';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';

import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import MenuIcon from '@mui/icons-material/Menu';

import { Box, Button, IconButton, Typography } from "@mui/material";

import logo from './Assets/logo3.png'
import FormModel from "./lib/components/Forms/FormModel";

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
          path: "/worklogs/user data",
          renderList: (params) => {
            // console.log(params)
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
      // {
      //   title: "Accounts",
      //   list: [
      //     {
      //       name: "Chat",
      //       icon: ChatBubbleIcon
      //     },
      //     {
      //       name: "Settings",
      //       icon: SettingsIcon
      //     },
      //     {
      //       name: "Logout",
      //       icon: LogoutIcon
      //     },
      //     {
      //       name: "Chat",
      //       icon: ChatBubbleIcon
      //     },
      //     {
      //       name: "Settings",
      //       icon: SettingsIcon
      //     },
      //     {
      //       name: "Logout",
      //       icon: LogoutIcon
      //     }
      //   ]
      // }
    ]
  }

  const inputs = [
    {
      name: "username",
      label: "Username",
      type: "text",
      value: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      value: "",
    },
    {
      name: "isAdmin",
      label: "Is Admin",
      lookups: [{ title: "Yes", value: 0 }, { title: "No", value: 1 }],
      value: "",
    },
    {
      name: "roles",
      label: "Roles",
      lookups: [{ title: "Edit", value: 3 }, { title: "Delete", value: 6 }, { title: "Add", value: 12 }],
      multiple: true,
      value: [],
    }
  ]

  const options = [
    { name: "Hey", onItemClick: (e) => { console.log(e) } }
  ];

  const NavHeader = () => {
    return (
      <Box marginBottom={6} width={"100%"}>
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

  const columns = [
    { field: "name", flex: 1 },
    { field: "age", flex: 1 },
    { field: "gender", flex: 1 },
    { field: "class", flex: 1 },
    { field: "color", flex: 1 },
  ]

  const rows = [
    { name: "Amos", age: 21, gender: "male", class: "C", color: "black" }
  ]

  const [anchorEl, setAnchorEl] = useState(null);

  const openC = Boolean(anchorEl);

  return (
    <Box display={"flex"} columnGap={4}>
      <SideBarModel
        navigateItems={nav}
        NavHeader={NavHeader}
        openHeader={open}
        activeTabBackgroundColor="#395759"
        backgroundColor="#001d25"
        textColor="#c8cecf"
        options={{
          // listItemButton: {
          //   border: "1px solid red",
          //   padding: .7
          // }
          listItemButton: (list) => (
            {
              // border: "1px solid red",
              paddingY: list.isActiveTab ? 1 : 0
            }
          ),
          // listItemText: {
          //   color: "red"
          // },
          getColor: (params) => {
            return params.isActiveTab ? "red" : "white"
          }
        }}
      />

      <Box sx={{
        // border: "1px solid red",
        flex: 1
      }}>
        <Routes>
          <Route path="/"
            element={<div style={{ padding: 16 }}>
              {/* <DialogModel open={true} title={"Add Brand Form"}>
                <FormModel
                  inputs={inputs || []}
                  width={400}
                // isLoading={loading}
                // onSubmit={handleSubmitProductBrand}
                />
              </DialogModel> */}
              {/* <Button >Open</Button>
              <CalenderModel anchorEl={anchorEl} open={openC} /> */}
              {/* <GridModel columns={columns} rows={rows} getRowId={(rows) => rows.name} pageSizeOptions={[5, 10, 20, 50, 100]} sx={{
                "&>.MuiDataGrid-main": {
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontSize: 15,
                    fontWeight: 900,
                  },
                  "& .MuiDataGrid-columnHeader:focus": {
                    outline: "none",
                  },
                  "& .MuiDataGrid-columnHeader:focus-within": {
                    outline: "none !important",
                  },
                },
                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                  outline: "none !important",
                },
                "& .odd-row": {
                  backgroundColor: "rgba(245,250,254, 0.9)",
                },
                borderColor: "transparent",
              }} /> */}
              <PopoverModel popoverItems={options} open={true} />
            </div>}
          />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
