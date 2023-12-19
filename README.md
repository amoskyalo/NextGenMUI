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
         //other props
       />
     );
   };
   ```

4. **StepperFormModel**: combines Material-UI's Stepper with form functionalities, providing a step-by-step user experience for complex form processes. It's perfect for scenarios like registrations or multi-stage data entries, offering customizable step labels, input fields, and navigation buttons.

   **Usage**

   ```javascript
   import { StepperFormModel } from "next-gen-mui";

   const App = () => {
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

     return (
       <StepperFormModel
         steps={steps || []}
         width={400}
         onSubmit={(values) => console.log(values)}
         //other props
       />
     );
   };
   ```

5. **GridModel**: an advanced and highly customizable data grid solution, seamlessly integrated with Material-UI. Designed for flexibility and ease of use, it supports features like dynamic data rendering, printing, and exporting functionalities. The component includes interactive elements such as a calendar for date filtering, custom button actions, and an option to add new data entries, making it suitable for a wide range of data management tasks.

   **Usage**

   ```javascript
   import { GridModel } from "next-gen-mui";

   const App = () => {
     const columns = [
       { field: "name", flex: 1 },
       { field: "age", flex: 1 },
       { field: "gender", flex: 1 },
       { field: "class", flex: 1 },
       { field: "color", flex: 1 },
     ];

     const rows = [
       { name: "Amos", age: 21, gender: "male", class: "C", color: "black" },
     ];

     <GridModel
       columns={columns}
       rows={rows}
       getRowId={(rows) => rows.name}
       pageSizeOptions={[5, 10, 20, 50, 100]}
       onDateChange={({ startDate, endDate }) =>
         console.log(startDate, endDate)
       }
       sx={{
         "&>.MuiDataGrid-main": {
           "& .MuiDataGrid-columnHeaderTitle": {
             fontSize: 15,
             fontWeight: 900,
           },
           "& .MuiDataGrid-columnHeader:focus": {
             outline: "none",
           },
           "& .MuiDataGrid-columnHeader:focus-within": {
             outline: "none !important",
           },
         },
         "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
           outline: "none !important",
         },
         "& .odd-row": {
           backgroundColor: "rgba(245,250,254, 0.9)",
         },
         borderColor: "rgba(0, 0, 0, 0.2)",
       }}
     />;
   };
   ```

6. **SideBarModel**: a sleek, responsive sidebar navigation system designed to enhance Material-UI applications. It features a collapsible drawer with customizable width, color themes, and icon-based navigation items. This model is composed of DrawerItemsModel and ListItemsModel, which collectively handle the rendering of navigation items, including support for nested sub-links and sections. The sidebar's functionality is augmented with React Router for seamless navigation and route management. Users can expand or collapse the sidebar, offering a space-efficient way to access various parts of an application. The SideBarModel is an ideal solution for applications requiring a robust, aesthetically pleasing navigation system with adaptable features and a user-friendly interface.

   **Usage**

   SideBarModel can have sections or just a plain sidebar navigation.

   ```javascript
   import { SideBarModel } from "next-gen-mui";

   const App = () => {
        const NavHeader = () => {
            return (
                {** nav header component here**}
            )
        }

    //for splain sidebar
     const navigation = [
       {
         name: "Dashboard",
         icon: DashboardIcon,
         path: "/",
         renderList: (params) => {
           // console.log(params)
           // return (
           //   <p>{params.name}</p>
           // )
         },
       },
       {
         name: "Clients",
         icon: GroupIcon,
         path: "/dashboard/clients",
       },
       {
         name: "Worklogs",
         icon: DataThresholdingIcon,
         path: "/worklogs",
         subLinks: [
           {
             name: "User Data",
             icon: AccountBalanceIcon,
             path: "/worklogs/user data",
             renderList: (params) => {
               // console.log(params)
               // return (
               //   <p>{params.name}</p>
               // )
             },
           },
           {
             name: "Client Statistics",
             icon: ManageHistoryIcon,
           },
         ],
       },
     ];

     //for sidebar with sections
    const nav = {
    sections: [
      {
        title: "Overview",
        list: [...navigation],
      },
      {
        title: "Accounts",
        list: [
          {
            name: "Chat",
            icon: ChatBubbleIcon
          },
          {
            name: "Settings",
            icon: SettingsIcon
          },
          {
            name: "Logout",
            icon: LogoutIcon
          }
        ]
      }
    ]
   }

     return (
        <SideBarModel
            navigateItems=//if it has section, nav, else navigation
            NavHeader={NavHeader}
            openHeader={open}
            activeTabBackgroundColor="#395759"
            backgroundColor="#001d25"
            textColor="#c8cecf"
            options={{
            listItemButton: {
                border: "1px solid red",
                padding: .7
            }
            listItemButton: (list) => (
                {
                border: "1px solid red",
                paddingY: list.isActiveTab ? 1 : 0
                }
            ),
            listItemText: {
                color: "red"
            },
            getColor: (params) => {
                return params.isActiveTab ? "red" : "white"
            }
            }}
        />
     )
   };
   ```

7. **PopoverModel**: Enriches Material-UI applications with a stylish, customizable menu, featuring a sleek dropdown design. It allows for dynamic menu item rendering, each with optional icons and individual click handlers. This model elegantly integrates with Material-UI's Menu component, offering a visually appealing and user-friendly interface. It's ideal for adding context-sensitive menus to enhance user interaction in modern web applications.

   **Usage**

   ```javascript
    import { PopoverModel } from "next-gen-mui";

    const App = () => {
    const [anchorEL, setAnchorEl] = useState(null);
    const open = Boolean(anchorEL);

     const options = [
       {
         name: "Add",
         icon: //icon ( optional ),
         onItemClick: (e) => {
           console.log(e);
         },
       },
        {
         name: "Delete",
         icon: //icon ( optional ),
         onItemClick: (e) => {
           console.log(e);
         },
       },
        {
         name: "Share",
         icon: //icon ( optional ),
         onItemClick: (e) => {
           console.log(e);
         },
       }
     ];

     return (
        <div>
            <button onClick={(e) => setAnchorEL(e.currentTarget)}>open menu</button>
            <PopoverModel popoverItems={options} open={open} />
        </div>
     )
   };
   ```

## Upcoming Enhancements

NextGenMUI is continuously evolving, with more components in development to further enrich its offering. The focus remains on providing high-quality, customizable, and easy-to-integrate solutions that cater to the ever-changing needs of modern web development.

## Ideal For

NextGenMUI is perfect for developers who are looking to leverage the power of Material-UI while also desiring additional features and customization options. Whether you are building a small project or a large-scale enterprise application, NextGenMUI offers components that are scalable, efficient, and aesthetically pleasing

## Easy Integration

Designed with ease of use in mind, NextGenMUI integrates seamlessly into your existing Material-UI projects. The components are designed to be drop-in replacements or enhancements to standard MUI components, ensuring a smooth transition and minimal learning curve.

## Stay Tuned

As NextGenMUI continues to grow, we are committed to introducing more components and features. Stay tuned for updates and enhancements that will further empower your web development journey with Material-UI.

## Contribution Guidelines

We welcome contributions to our component library! Whether you're fixing a bug, adding a feature, or improving documentation, here's how you can contribute:

1. ### Fork the Repository

Begin by forking the repository to your own GitHub account. This creates a copy where you can make your changes.

2. ### Clone the Forked Repository

Clone the forked repository to your local machine. This step allows you to work on the codebase locally.

3. ### Install Dependencies

   ```javascript
    cd YOUR-REPOSITORY
    yarn install
   ```

4. ### Create a New Branch

   ```javascript
   git checkout -b your-branch-name
   ```

5. ### Develop Your Component

- Create your new component within the lib folder. This folder contains all the components of the library.
- Test your component by importing and using it in `app.js`. This file is our testing ground for components.

6. ### Build the Library

After you've added your component, run the following command to add the new component to the `Dist` folder:

    ```javascript
    yarn build
    ```

7. ### Commit and Push Your Changes

Commit your changes with a clear commit message. Push the changes to your forked repository.

    ```javascript
    git commit -m "Add a brief description of your changes"
    git push origin your-branch-name
    ```

8. ### Open a Pull Request

Go to your forked repository on GitHub and open a pull request to the original repository. Provide a detailed description your changes and reference any related issues. Give a reason too of why they should be merged.

Please ensure your code adheres to our coding standards and include any necessary tests. We look forward to your contributions! 🌟
