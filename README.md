# NextGenMUI

<img width="142" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/f62ec0db-c7c4-4b3c-943f-9bd30403a645">

NextGenMUI is an innovative plugin designed to extend the capabilities of Material-UI, providing developers with an enhanced toolkit for creating dynamic, responsive, and visually appealing web applications. This plugin is a collection of thoughtfully designed components built on top of Material-UI, offering additional functionality and customization options to streamline the development process.

## Key Components

1. **AlertDialogModel**: It offers a streamlined and effective way to present information and capture user responses. Key features include customizable titles and content texts, straightforward action handling with 'Ok' and 'Cancel' buttons, and adjustable sizing for various application contexts. This component is ideal for confirmations, warnings, or informational alerts in your application, providing both simplicity and flexibility in dialog management.

   **Usage**

   ```javascript
   import { AlertDialogModel } from "next-gen-mui";

   const App = () => {
     const [open, setOpen] = useState(false);

     return (
       <AlertDialogModel
         open={open}
         onClose=//close function
         onAction=//action function ( ok )
         dialogContentText="Are you sure you want to delete"
         dialogTitle="Delete"
       />
     );
   };
   ```

2. **DialogModel**: It seamlessly integrates user content through its children prop and offers a user-friendly interface with an optional title and a close button. Key features include flexible width settings, adjustable maximum width, and a clean, responsive design. This component excels in providing a dynamic container for a wide range of content, from simple messages to complex forms, making it ideal for various application scenarios where user interaction and content presentation are key.

   **Usage**

   ```javascript
   import { DialogModel } from "next-gen-mui";

   const App = () => {
     const [open, setOpen] = useState(false);

     return (
       <DialogModel
         open={open}
         title="Dialog Model Title"
         onClose={"close function"}
         //other props
       >
         <p>This is a Dialog model and is open</p>
       </DialogModel>
     );
   };
   ```

3. **FormModel**: A highly customizable and versatile form builder compatible with Material-UI, offering seamless integration of Formik for form state management and Yup for validation. It supports various input types, including password fields with visibility toggle, and provides real-time validation feedback. Adjustable grid columns, input widths, and a dynamic schema ensure flexibility for diverse form layouts, making it an essential tool for efficient form creation in React applications.

   **Usage**

   ```javascript
   import { FormModel } from "next-gen-mui";

   const App = () => {
     const inputs = [
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
         value: [
           { title: "Edit", value: 3 },
           { title: "Delete", value: 6 },
         ],
       },
     ];

     return (
       <FormModel
         inputs={inputs || []}
         width={400}
         onSubmit={(values) => console.log(values)}
       />
     );
   };
   ```

4. **StepperFormModel**: combines Material-UI's Stepper with form functionalities, providing a step-by-step user experience for complex form processes. It's perfect for scenarios like registrations or multi-stage data entries, offering customizable step labels, input fields, and navigation buttons.
5. **GridModel**: an advanced and highly customizable data grid solution, seamlessly integrated with Material-UI. Designed for flexibility and ease of use, it supports features like dynamic data rendering, printing, and exporting functionalities. The component includes interactive elements such as a calendar for date filtering, custom button actions, and an option to add new data entries, making it suitable for a wide range of data management tasks.
6. **SideBarModel**: a sleek, responsive sidebar navigation system designed to enhance Material-UI applications. It features a collapsible drawer with customizable width, color themes, and icon-based navigation items. This model is composed of DrawerItemsModel and ListItemsModel, which collectively handle the rendering of navigation items, including support for nested sub-links and sections. The sidebar's functionality is augmented with React Router for seamless navigation and route management. Users can expand or collapse the sidebar, offering a space-efficient way to access various parts of an application. The SideBarModel is an ideal solution for applications requiring a robust, aesthetically pleasing navigation system with adaptable features and a user-friendly interface.
7. **PopoverModel**: Enriches Material-UI applications with a stylish, customizable menu, featuring a sleek dropdown design. It allows for dynamic menu item rendering, each with optional icons and individual click handlers. This model elegantly integrates with Material-UI's Menu component, offering a visually appealing and user-friendly interface. It's ideal for adding context-sensitive menus to enhance user interaction in modern web applications.

## Upcoming Enhancements

NextGenMUI is continuously evolving, with more components in development to further enrich its offering. The focus remains on providing high-quality, customizable, and easy-to-integrate solutions that cater to the ever-changing needs of modern web development.

## Ideal For

NextGenMUI is perfect for developers who are looking to leverage the power of Material-UI while also desiring additional features and customization options. Whether you are building a small project or a large-scale enterprise application, NextGenMUI offers components that are scalable, efficient, and aesthetically pleasing

## Easy Integration

Designed with ease of use in mind, NextGenMUI integrates seamlessly into your existing Material-UI projects. The components are designed to be drop-in replacements or enhancements to standard MUI components, ensuring a smooth transition and minimal learning curve.

## Stay Tuned

As NextGenMUI continues to grow, we are committed to introducing more components and features. Stay tuned for updates and enhancements that will further empower your web development journey with Material-UI.
