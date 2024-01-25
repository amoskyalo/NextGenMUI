import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListItem, Fade, List, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const ListItemsModel = ({ listItems, expanded, open, setExpanded, handleClick, textColor, activeTabBackgroundColor, options }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.replace("%20", "-");

    const isActiveTab = (tab) => {
        if (tab.subLinks) {
            return tab.subLinks.some(link => link.path?.replace(" ", "-") === path);
        }
        return tab.path?.replace(" ", "-") === path;
    };

    const getStyle = (styleFunction, item) =>
        typeof styleFunction === 'function' ? styleFunction({ ...item, open, isActiveTab: isActiveTab(item) }) : styleFunction;

    const renderListItem = (item) => (
        <ListItem
            disablePadding
            onClick={() => handleClick(item)}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isActiveTab(item) && activeTabBackgroundColor,
                borderRadius: 1,
                paddingY: 0
            }}
        >
            <ListItemButton
                sx={{
                    justifyContent: open ? 'initial' : 'center',
                    ...getStyle(options?.listItemButton, item),
                }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', ml: open ? 0 : 0.5 }} >
                    <item.icon
                        sx={{
                            ...getStyle(options?.listIcon, item),
                            color: options?.getColor ? options.getColor({ ...item, open, isActiveTab: isActiveTab(item) }) : textColor
                        }} />
                </ListItemIcon>
                <ListItemText
                    primary={item.name}
                    sx={{
                        opacity: open ? 1 : 0,
                        color: options?.getColor ? options.getColor({ ...item, open, isActiveTab: isActiveTab(item) }) : textColor,
                        ...getStyle(options?.listItemText, item),
                    }}
                />
                {item.subLinks && open && <ExpandMoreIcon sx={{ color: options?.getColor ? options.getColor({ ...item, open, isActiveTab: isActiveTab(item) }) : textColor }} onClick={() => setExpanded(item.name)} />}
            </ListItemButton>
        </ListItem>
    );

    const renderList = (item, additionalProps) => {
        if (item.renderList) {
            const renderedComponent = item.renderList({ ...item, ...additionalProps });
            if (React.isValidElement(renderedComponent)) {
                return renderedComponent;
            }
        }
        return null;
    };

    return (
        <List sx={{ rowGap: 1, display: "flex", flexDirection: "column" }}>
            {listItems.map((item) => (
                renderList(item, { open, isActiveTab: isActiveTab(item) }) ||
                <React.Fragment key={item?.name}>
                    {renderListItem(item)}
                    {expanded === item.name && item.subLinks && open &&
                        <Fade in={Boolean(expanded)} timeout={700}>
                            <List sx={{ ml: 5, py: 0 }}>
                                {item.subLinks.map((link) => (
                                    renderList(link, { open, parentTabActive: isActiveTab(item), isActive: isActiveTab(link) }) ||
                                    <ListItem disablePadding key={link.name} onClick={() => navigate(link.path)}>
                                        <ListItemButton sx={{ paddingY: 0.5 }}>
                                            {link.icon && <ListItemIcon sx={{ minWidth: 0, mr: 1.5 }}>
                                                <link.icon sx={{ color: options?.getColor ? options.getColor({ ...item, open, isActiveTab: isActiveTab(item) }) : textColor, fontSize: 18 }} />
                                            </ListItemIcon>}
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
    );
};

export default ListItemsModel;
