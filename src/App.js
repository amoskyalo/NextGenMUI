import { useState } from "react";
import AlertDialog from "./lib/components/Dialog/AlertDialog";
import FormModel from "./lib/components/Forms/FormModel";
import DialogModel from "./lib/components/Dialog/DialogModel";

function App() {
  const [openAlert, setOpenAlert] = useState(false);
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [payload, setPayload] = useState({ userName: null, userEmail: null, isAdmin: null });

  const { userName, userEmail, isAdmin } = payload;

  const handleClose = () => {
    setOpenAlert(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(payload)
  };

  const inputs = [
    {
      name: "userName",
      label: "User Name",
      type: "text",
      value: userName,
      required: true
    },
    {
      name: "userEmail",
      label: "User Email",
      type: "email",
      value: userEmail,
      required: true
    },
    {
      name: "isAdmin",
      label: "Is Admin",
      lookups: [{ name: "Yes", value: 0 }, { name: "No", value: "Yes" }],
      value: isAdmin,
      required: true
    }
  ];

  return (
    <>
      <div>
        <button onClick={() => setOpenAlert(true)}>Open Alert</button>
        <button onClick={() => setOpenFormDialog(true)}>Open form Dialog</button>
      </div>

      {/* <DialogModel open={openFormDialog} maxWidth="xs" fullWidth={true} title="Add New User" onClose={() => setOpenFormDialog(false)}> */}
      <div style={{ display: "flex", height: "100vh", width: "100%", alignItems: "center", justifyContent: "center" }}>
        <FormModel
          inputs={inputs}
          onFieldChange={handleChange}
          onSubmit={onSubmit}
          width={700}
          gridColumnsCount={2}
          options={{
            form: {
              padding: 32,
              borderRadius: 8,
              backgroundColor: "#f5fafe"
            }
          }}
        />
      </div>
      {/* </DialogModel> */}

      <AlertDialog
        dialogContentText="Are you sure you want to proceed with this action?"
        dialogTitle="Confirm Delete"
        open={openAlert}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
