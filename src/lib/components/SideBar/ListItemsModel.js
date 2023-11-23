import React from 'react'
import { ListItem, Fade, List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ListItemsModel = ({ listItems, expanded, open, setExpanded, handleClick, textColor, activeTabBackgroundColor }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    function getActiveTab(tab) {
        let active = false;

        if (path === tab.path && !tab.subLinks) { // for tabs without sublinks
            active = true;
        } else if (tab.subLinks) { // for tabs with sublinks
            const sublinkWithCurrentPath = tab.subLinks.find(link => link.path === path);
            if (sublinkWithCurrentPath) {
                active = true;
            }
        }

        return active;
    }

    function getActiveSubLink(tab) {
        let active = false;

        const sublinkWithCurrentPath = tab.subLinks.find(link => link.path === path);
        if (sublinkWithCurrentPath) {
            active = true;
        }

        return active;
    }

    return (
        <List>
            {listItems.map((item) => (
                item.renderList && item.renderList({ ...item, open, isActiveTab: getActiveTab(item) }) ? item.renderList({ ...item, open, isActiveTab: getActiveTab(item) }) :
                    <React.Fragment key={item?.name}>
                        <ListItem
                            disablePadding
                            onClick={() => handleClick(item)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: getActiveTab(item) && activeTabBackgroundColor,
                                borderRadius: 1
                            }}
                        >
                            <ListItemButton
                                sx={{ justifyContent: open ? 'initial' : 'center' }}>
                                <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', ml: open ? 0 : 0.5 }} >
                                    <item.icon sx={{ color: textColor }} />
                                </ListItemIcon>
                                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
                                {item.subLinks && open && <ExpandMoreIcon sx={{ color: textColor }} onClick={() => setExpanded(item.name)} />}
                            </ListItemButton>
                        </ListItem>

                        {expanded === item.name && item.subLinks && open &&
                            <Fade in={Boolean(expanded)} timeout={700}>
                                <List sx={{ ml: 5, py: 0 }}>
                                    {item.subLinks.map((link) => (
                                        link.renderList &&
                                            link.renderList({ ...link, open, parentTabActive: getActiveTab(item), isActive: getActiveSubLink(item) }) ?
                                            link.renderList({ ...link, open, parentTabActive: getActiveTab(item), isActive: getActiveSubLink(item) }) :
                                            <ListItem disablePadding key={link.name} onClick={() => navigate(link.path)}>
                                                <ListItemButton sx={{ paddingY: 0.5 }}>
                                                    {link.icon && <ListItemIcon
                                                        sx={{ minWidth: 0, mr: 1.5 }}
                                                    >
                                                        <link.icon sx={{ color: textColor, fontSize: 18 }} />
                                                    </ListItemIcon>
                                                    }
                                                    <ListItemText
                                                        primary={link.name}
                                                        sx={{ "& .MuiListItemText-primary": { fontSize: 14 } }}
                                                    />
                                                </ListItemButton>
                                            </ListItem>
                                    ))}
                                </List>
                            </Fade>}
                    </React.Fragment>
            ))}
        </List>
    )
}

export default ListItemsModel