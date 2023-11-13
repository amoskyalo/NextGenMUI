## PopoverModel

<img width="194" alt="image" src="https://github.com/amoskyalo/NextGenMUI/assets/91586973/359244e9-e423-40f1-ac45-6776687cadc4">

`PopoverModel` is a customizable popover component built using Material-UI. It is designed to provide a flexible and easy-to-use interface for displaying additional information, actions, or content in a compact, interactive format.

### Features

- Customizable popover items with icons and action handlers
- Support for dynamic content
- Lightweight and easy integration with existing Material-UI projects
- Custom styling options

### Props

The `PopoverModel` component accepts the following props:

- **`popoverItems`**: An array of objects representing the items in the popover. Each object should have `name`, `onItemClick` (function to execute on click), and an optional `icon`.
- **`open`**: A boolean to control the visibility of the popover.
- **`anchorEl`**: The DOM element used to set the position of the popover.
- **`onClose`**: A function that is called to close the popover.

### Example Usage

Here is a basic example of how to use the `PopoverModel`:

```javaScript
import { useState } from 'react';
import { PopoverModel } from 'NextGenMUI';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

function App() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);


  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const popoverActions = [
    { name: "Profile", onItemClick: () => { }, icon: AccountCircleIcon },
    { name: "Settings", onItemClick: () => { }, icon: SettingsIcon },
    { name: "Notifications", onItemClick: () => { }, icon: NotificationsActiveIcon },
    { name: "Logout", onItemClick: () => { }, icon: PowerSettingsNewIcon }
  ]

  return (
    <>
      <p style={{ marginRight: 4 }}>Exapnd Menu</p>
      <ExpandCircleDownIcon sx={{ cursor: 'pointer' }} onClick={handleOpenPopover} />
      <PopoverModel popoverItems={popoverActions} anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)} />
    </>
  );
}

export default App;
```

