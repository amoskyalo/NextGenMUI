# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## FormModel Component

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
