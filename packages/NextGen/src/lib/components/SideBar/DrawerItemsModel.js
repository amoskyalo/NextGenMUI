import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ListItemsModel from './ListItemsModel';
import { Typography, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DrawerItemsModel = ({ listItems, activeTabBackgroundColor = '#ffffff', textColor = '#000000', open = false, options }) => {
    const navigation = useNavigate();
    const [expanded, setExpanded] = useState(null);

    const handleClick = useCallback((item) => {
        if (item.subLinks) {
            setExpanded(expanded === item.name ? null : item.name);
        } else {
            navigation(item?.path);
        }
    }, [expanded, navigation]);

    const getListModel = useCallback((items) => (
        <ListItemsModel
            listItems={items}
            expanded={expanded}
            open={open}
            textColor={textColor}
            activeTabBackgroundColor={activeTabBackgroundColor}
            handleClick={handleClick}
            setExpanded={setExpanded}
            options={options}
        />
    ), [expanded, open, textColor, activeTabBackgroundColor, handleClick, options]);

    return (
        Array.isArray(listItems) ? getListModel(listItems) : listItems?.sections?.map((section, index) => (
            <Box key={index} sx={{ marginBottom: 3 }}>
                {section.title && open && <Typography sx={{ fontSize: 14, mb: .5, opacity: "90%" }}>{section.title}</Typography>}
                {getListModel(section.list)}
                {index !== listItems.sections.length - 1 && <Divider sx={{ mt: 1 }} color={activeTabBackgroundColor} />}
            </Box>
        ))
    );
}

DrawerItemsModel.propTypes = {
    listItems: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            path: PropTypes.string,
            subLinks: PropTypes.array,
        })),
        PropTypes.shape({
            sections: PropTypes.arrayOf(PropTypes.shape({
                title: PropTypes.string,
                list: PropTypes.array.isRequired,
            }))
        })
    ]),
    activeTabBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    open: PropTypes.bool,
    options: PropTypes.object
};

export default DrawerItemsModel;
