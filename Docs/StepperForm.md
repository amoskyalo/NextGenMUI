## StepperFormModel 

<img width="317" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/af41ff81-3847-4b85-ab29-0bece002adfa">
<img width="317" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/73e264a2-2664-4cfe-8ab0-a736adc30c79">
<img width="318" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/56d68c91-299c-40d8-84a5-e44329c9926c">

### Props

### Usage

Here's an example of how to use the `StepperFormModel` component:

```javaScript
import { useState } from "react";
import StepperFormModel from "NextGenMUI";

function App() {
  const stepsList = [
    {
      label: "User Details",
      inputs: [
        {
          name: "userName",
          type: "text",
          label: "Full Name",
          value: null,
          required: true
        },
        {
          name: "userPhone",
          label: "Phone Number",
          value: null,
          required: true,
          type: "number"
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
        <StepperFormModel
          steps={stepsList}
          options={{
          stepper: {
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
            boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          }
        }}
        />
      </div>
    </>
  );
}

export default App;


```
