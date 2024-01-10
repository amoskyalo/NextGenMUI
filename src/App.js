import React from "react";
import { Box, IconButton, Button, Typography } from "@mui/material";
import StepperFormModel from "./lib/components/Forms/StepperFormModel";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import SideBarModel from "./lib/components/SideBar";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HelpIcon from '@mui/icons-material/Help';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import InsightsIcon from '@mui/icons-material/Insights';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DoorBackIcon from '@mui/icons-material/DoorBack';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import ListIcon from '@mui/icons-material/List';
import MapIcon from '@mui/icons-material/Map';
import GridModel from "./lib/components/Grids/GridModel";
import FormModel from "./lib/components/Forms/FormModel";
import './App.css'

function App() {
  const routes = {
    sections: [
      {
        title: "WORK",
        list: [
          {
            name: "Dashboard",
            path: "/",
            icon: DashboardIcon
          },
          {
            name: "Deployments",
            path: "/",
            icon: LayersIcon,
            subLinks: [
              {
                name: "List View",
                icon: ListIcon,
                path: "/"
              },
              {
                name: "Map View",
                icon: MapIcon,
                path: "/"
              }
            ]
          },
          {
            name: "New Rental",
            path: "/",
            icon: CreateNewFolderIcon
          },
          {
            name: "Service Schedule",
            path: "/",
            icon: TaskAltIcon
          },
          {
            name: "Tasks",
            path: "/",
            icon: AssignmentIndIcon
          },
          {
            name: "Reporting",
            path: "/",
            icon: InsightsIcon
          }
        ]
      },
      {
        title: "MANAGE",
        list: [
          {
            name: "Customers",
            path: "/",
            icon: ContactPageIcon
          },
          {
            name: "Equipment",
            path: "/",
            icon: DoorBackIcon
          }
        ]
      },
      {
        title: "ADMIN",
        list: [
          {
            name: "Company",
            path: "/",
            icon: BusinessIcon
          },
          {
            name: "Users",
            path: "/",
            icon: GroupIcon
          }
        ]
      }
    ]
  }

  const columns = [
    { field: "name" },
    { field: "Age" },
    { field: "Email" }
  ]

  const inputs = [
    {
      name: "name",
      label: "Name",
      type: "text",
      isRequired: true,
      renderField: params => {
        //render custom field
      },
      onChange: params => {
        //get param values on change
      }
      // disabled: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      isRequired: true
    },
    {
      name: "experience",
      label: "Experience",
      isRequired: true,
      lookups: [{ title: "Beginner", value: 1 }, { title: "Senior", value: 2 }],
    },
    {
      name: "job_preference",
      label: "Type",
      isRequired: true,
      multiple: true,
      size: "small",
      lookups: [{ title: "Remote", value: 0 }, { title: "Part time", value: 1 }, { title: "Full time", value: 1 }],
    },
    {
      name: "startDate",
      label: "Start Date",
      type: "dates",
      isRequired: true,
    },
    {
      name: "languages",
      label: "Proficient languages",
      isRequired: true,
      multiple: true,
      isBoolean: true,
      booleanOptions: ["Javascript", "Ruby on Rails", "Python", "Java", "C", "C#"]
    },
    {
      name: "notify_email",
      label: "Receive marketing email",
      isBoolean: true,
      isRequired: true,
      booleanOptions: [
        {
          label: "Yes",
          value: true,
        },
        {
          label: "No",
          value: false
        }
      ]
    }
  ];

  return (
    <Box sx={{ mx: "auto", padding: 2 }}>
      <Typography sx={{ fontWeight: 900, fontSize: 24 }}>Registration Form</Typography>
      <FormModel
        inputs={inputs}
        onSubmit={val => console.log(val)}
        options={{
          form: {
            // backgroundColor: "red",
            // padding: 10
          }
        }}
      />
    </Box>
  );
}

export default App;
