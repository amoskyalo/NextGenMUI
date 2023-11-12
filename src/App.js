import { useState } from "react";
import DialogModel from "./Components/Dialog/DialogModel";

function App() {
  const [openAlert, setOpenAlert] = useState(true);

  const handleClose = () => {
    setOpenAlert(false);
  };

  return (
    <>
      <DialogModel
        dialogContentText="Are you sure you want to proceed with this action?"
        dialogTitle="Confirm Delete"
        open={openAlert}
        onClose={handleClose}
      />
    </>
  );
}

export default App;
