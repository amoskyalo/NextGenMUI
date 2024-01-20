import { useState } from 'react';
import { SideBarModel } from 'next-gen';
import { Box, TextField, InputAdornment, Typography, Switch } from '@mui/material';
import { routes } from './Routes';
import logo from './Assets/logo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [sections, setSections] = useState(true);

  const SearchBar = () => {
    return (
      <TextField
        fullWidth
        size='small'
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon sx={{ color: "#5f6373", mr: 1 }} />
            </InputAdornment>
          ),
          endAdornment: (
            <Typography sx={{ color: "#5f6373", fontSize: 14, opacity: "75%" }}>Ctrl+D</Typography>
          ),
        }}
      />
    )
  }

  const NavFooter = () => {
    return (
      <Box display={"flex"} alignItems={"center"}>
        <Switch onChange={(e) => setSections(e.target.checked)} checked={sections} />
        <Typography>Sections</Typography>
      </Box>
    )
  };

  const NavHeader = () => {
    return (
      <Box width={"100%"} marginTop={2} marginBottom={sections ? 4 : 3}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
          <img src={logo} alt="logo" className='logo' />
          <SettingsIcon />
        </Box>
        <SearchBar />
      </Box>
    )
  };

  return (
    <SideBarModel
      navigateItems={sections ? routes : [...routes.sections[0].list, ...routes.sections[1].list]}
      NavHeader={NavHeader}
      NavFooter={NavFooter}
      backgroundColor="#0b0f1f"
      textColor="rgba(255, 255, 255, 0.6)"
      activeTabBackgroundColor="rgba(89, 89, 94, .2)"
      listConatinerClassName="nav"
      options={{
        listItemButton: {
          paddingY: .8
        }
      }}
    />
  );
}

export default App;
