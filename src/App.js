import FormModel from "./lib/components/Forms/FormModel";

function App() {
  const inputs = [
    {
      name: "userName",
      type: "text",
      label: "Full Name",
      value: null,
    },
    {
      name: "userPhone",
      label: "Phone Number",
      type: "tel",
      value: null
    },
    {
      name: "userEmail",
      label: "Email Address",
      type: "email",
      value: null
    }
  ]

  return (
    <>
      <div style={{ width: 300, margin: "auto", marginTop: 200 }}>
        <FormModel
          inputs={inputs}
          CustomTitle={() => <p style={{ fontSize: 18, fontWeight: 900 }}>Add New User</p>}
          onSubmit={(values) => { console.log(values) }}
          options={{
            form: {
              backgroundColor: "white",
              padding: ".5rem 2rem 2rem 2rem",
              borderRadius: 8,
              boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
            }
          }}
        />
      </div>
    </>
  );
}

export default App;
