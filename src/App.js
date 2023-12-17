import { Button } from "@mui/material";
import StepperFormModel from "./lib/components/Forms/StepperFormModel";

function App() {
  const steps = [
    {
      label: "Step 1",
      inputs: [
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
      ],
    },
    {
      label: "Step 2",
      inputs: [
        {
          name: "isAdmin",
          label: "Is Admin",
          lookups: [
            { title: "Yes", value: 0 },
            { title: "No", value: 1 },
          ],
          value: "",
        },
        {
          name: "roles",
          label: "Roles",
          lookups: [
            { title: "Edit", value: 3 },
            { title: "Delete", value: 6 },
            { title: "Add", value: 12 },
          ],
          multiple: true,
          value: [{ title: "Edit", value: 3 }], //will be passed as the default values for this input,
        },
      ],
    },
  ];

  const CustomSubmitButton = () => (
    <Button variant="contained">Add To Table</Button>
  );

  return (
    <StepperFormModel
      steps={steps || []}
      width={400}
      onSubmit={(values) => console.log(values)}
      CustomSubmitButton={CustomSubmitButton}
    //other props
    />
  );
}

export default App;
