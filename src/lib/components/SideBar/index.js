import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerItemsModel from './DrawerItemsModel'

const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open, backgroundColor, textColor }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor,
        color: textColor,
        padding: "0 16px",
        border: "none"
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor,
        color: textColor,
        padding: "0 16px",
      },
    }),
  }),
);

const SideBarModel = ({ NavHeader, openHeader, activeTabBackgroundColor, backgroundColor, textColor, navigateItems }) => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer variant="permanent" open={openHeader || open} backgroundColor={backgroundColor} textColor={textColor}>
      <DrawerHeader>
        {
          NavHeader ? <NavHeader /> :
            <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
              <MenuIcon sx={{ color: textColor }} />
            </IconButton>
        }
      </DrawerHeader>

      <DrawerItemsModel
        listItems={navigateItems}
        activeTabBackgroundColor={activeTabBackgroundColor}
        textColor={textColor}
        open={open || openHeader}
      />
    </Drawer>
  )
}

SideBarModel.propTypes = {
  NavHeader: PropTypes.node,
  openHeader: PropTypes.bool,
  activeTabBackgroundColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  navigateItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    renderList: PropTypes.func
  }))
}

export default SideBarModel