## FormModel Component

<img width="260" alt="image" src="https://github.com/amoskyalo/React-Components-Plugin/assets/91586973/3505c4cd-009b-43f2-bba7-c217f09b761d">
<img width="258" alt="image" src="https://github.com/amoskyalo/React-Components-Plugin/assets/91586973/17890adb-9f30-4b58-8fe2-e3fb29163a24">
<img width="288" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/e45b75a0-2bc5-4282-a7a1-275ff6ff2699">
<img width="521" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/29cf861b-15ab-4f2b-8095-9467b9c30434">




The FormModel component is a versatile form component built using Material-UI. It dynamically renders input fields based on the provided configuration and handles both text and select input types. The form also supports loading states and submit button control.

### Props

The component accepts the following props:

- **inputs**: An array of objects describing each input field in the form. Each object can have the following properties:
  - **`name`** (string, required): The name of the input field.
  - **`label`** (string, required): The label text for the input field.
  - **`type`** (string): The type of the input field (e.g., text, number, etc.).
  - **`required`** (boolean, required): Whether the field is required.
  - **`value`** (string | number | boolean): The value of the input field.
  - **`lookups`** (array): An array of objects for select inputs, each with a `name` and `value`.
  - **`multiselect`** (boolean): If true, allows multiple selections in a select input.
  - **`disabled`** (boolean): If true, disables the input field.
- **width** (number): Sets width of the form.
- **gridColumnsCount** (number): Sets the grid columns cunt for the form since the form has a grid layout.
- **submitButtoWidth** ( number): Sets th width for the submit button. `Default is "100%"`
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
  const inputs = [
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

  return (
      <FormModel inputs={inputs}
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
  );
};

```
