## FormModel Component

<img width="260" alt="image" src="https://github.com/amoskyalo/React-Components-Plugin/assets/91586973/3505c4cd-009b-43f2-bba7-c217f09b761d">
<img width="247" alt="image" src="https://github.com/amoskyalo/React-Components-Plugin/assets/91586973/17890adb-9f30-4b58-8fe2-e3fb29163a24">
<img width="269" alt="image" src="https://github.com/amoskyalo/React-Components-Plugin/assets/91586973/c23b5140-36ab-4430-8878-3913027d0eb9">


The FormModel component is a versatile form component built using Material-UI. It dynamically renders input fields based on the provided configuration and handles both text and select input types. The form also supports loading states and submit button control.

### Props

The component accepts the following props:

- **inputs**: An array of objects describing each input field in the form. Each object can have the following properties:
  - **`name`** (string, required): The name of the input field.
  - **`label`** (string, required): The label text for the input field.
  - **`type`** (string): The type of the input field (e.g., text, number, etc.).
  - **`required`** (boolean, required): Whether the field is required.
  - **`value'** (string | number | boolean): The value of the input field.
  - **`lookups`** (array): An array of objects for select inputs, each with a `name` and `value`.
  - **`multiselect`** (boolean): If true, allows multiple selections in a select input.
  - **`disabled`** (boolean): If true, disables the input field.
- **maxWidth** (number): The maximum width of the form.
- **options** (object): Additional options for styling and behavior customization.
- **disableSubmitButton** (boolean): If true, disables the submit button.
- **isLoading** (boolean): If true, shows a loading indicator in the submit button.
- **onSubmit** (func): The function to call when the form is submitted.
- **onFieldChange** (func): The function to call when any input field value changes.

### Props

- `maxWidth`: 300
- `disableSubmitButton`: false

### Usage

Here's an example of how to use the `FormModel` component:

```javaScript
import {FormModel} from 'NextGenMUI';

const MyForm = () => {
  const [payload, setPayload] = useState({ userName: null, userEmail: null, isAdmin: null });

  const { userName, userEmail, isAdmin } = payload;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPayload({ ...payload, [name]: value }) //setting up payload
  }

  const onSubmit = (e) => {
    e.preventDefault()
    //handle form submission
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

  return (
    <FormModel
          inputs={inputs}
          onFieldChange={handleChange}
          onSubmit={onSubmit}
          maxWidth={"100%"}
          options={{
            form: {
              paddingTop: 4,
              borderRadius: 8,
            }
          }}
        />
  );
};

```
