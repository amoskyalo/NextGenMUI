import { useState } from "react";
import PopoverModel from "./lib/components/Popovers/PopoverModel";
import StepperFormModel from "./lib/components/Forms/StepperFormModel";

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const stepsList = [
    {
      label: "User Details",
      inputs: [
        {
          name: "userName",
          type: "text",
          label: "Full Name",
          value: "Amos Kyalo",
          required: true
        },
        {
          name: "userPhone",
          label: "Phone Number",
          value: null,
          required: true,
          type: "tel"
        },
        {
          name: "userEmail",
          label: "Email Address",
          value: null,
          required: true,
          type: "email"
        }
      ]
    },
    {
      label: "User Roles",
      inputs: [
        {
          name: "userCode",
          type: "text",
          label: "User Code",
          value: null,
          required: true
        },
        {
          name: "userType",
          lookups: [{ name: "Admin", value: 1 }, { name: "Supervisor", value: 0 }, { name: "IT Admin", value: 0 }],
          label: "User Type",
          value: null,
          required: true
        }
      ]
    },
  ]

  return (
    <>
      <div style={{ width: 400, margin: "auto", marginTop: 200 }}>
        <StepperFormModel steps={stepsList}
          onSubmit={(values) => {
            console.log(values)
          }}
          options={{
            stepper: {
              backgroundColor: "white",
              padding: 4,
              borderRadius: 2,
              boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            },
            form: {
              // styles to be appied to the form
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
