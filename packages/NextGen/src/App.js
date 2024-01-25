import React from "react";
import { Box, IconButton, Button, Typography, FormControl, InputLabel, TextField } from "@mui/material";
import GridModel from "./lib/components/Grids/GridModel";
import FormModel from "./lib/components/Forms/FormModel";
import './App.css';

const CommonTextField = ({ params }) => {
  const { formik, input: { name, label } } = params;

  return (
    <FormControl sx={{ width: "100%" }} size="small" key={name}>
      <InputLabel htmlFor={name} error={formik.touched[name] && Boolean(formik.errors[name])}>{label}</InputLabel>
      <TextField
        id={name}
        fullWidth
        label={label}
        name={name}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        variant="outlined"
        onChange={e => { formik.setFieldValue(name, e.target.value) }}
      />
      {formik.touched[name] && formik.errors[name] && (
        <Typography sx={{ fontSize: 12, color: "#d33247", mt: 1 }}>
          {formik.errors[name]}
        </Typography>
      )}
    </FormControl>
  )
}

const CommonSelectField = () => {
  //select component
}

function App() {


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
      inputType: 'textField',
      renderField: params => <CommonTextField params={params} />
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      isRequired: true,
      renderField: params => <CommonTextField params={params} />
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
    <Box>
      <GridModel columns={columns} rows={[]} onApplyDateChanges={dates => console.log(dates)} />
    </Box>
    // <Box sx={{ mx: "auto", padding: 2 }}>
    //   <Typography sx={{ fontWeight: 900, fontSize: 24 }}>Registration Form</Typography>
    //   <FormModel
    //     inputs={inputs}
    //     onSubmit={val => console.log(val)}
    //     options={{
    //       form: {
    //         // backgroundColor: "red",
    //         // padding: 10
    //       }
    //     }}
    //   />
    // </Box>
  );
}

export default App;

