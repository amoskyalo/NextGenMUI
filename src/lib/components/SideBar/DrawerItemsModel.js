import React, { useState } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ListItemsModel from './ListItemsModel';
import PropTypes from 'prop-types';

const DrawerItemsModel = ({ listItems, activeTabBackgroundColor, textColor, open }) => {
    const navigation = useNavigate();
    const [expanded, setExpanded] = useState(null);

    const handleClick = (item) => {
        if (Boolean(item.subLinks)) {
            if (Boolean(expanded)) {
                setExpanded(null)
            } else {
                setExpanded(item.name)
            }
        } else {
            navigation(item?.path)
        }
    }

    function getListModel(listItems) {
        return (
            <ListItemsModel
                listItems={listItems}
                expanded={expanded}
                open={open}
                textColor={textColor}
                activeTabBackgroundColor={activeTabBackgroundColor}
                handleClick={handleClick}
                setExpanded={setExpanded}
            />
        )
    }

    return (
        Array.isArray(listItems)
            ?
            getListModel(listItems)
            :
            listItems?.sections?.map((section, index) => (
                <Box key={index} sx={{ marginBottom: 3, }}>
                    {section.title && open && <Typography sx={{ fontSize: 14, mb: .5, opacity: "90%" }}>{section.title}</Typography>}
                    {getListModel(section.list)}
                    {index !== listItems?.sections?.length - 1 && <Divider sx={{ mt: 1 }} color={activeTabBackgroundColor} />}
                </Box>
            ))
    )
}

DrawerItemsModel.propTypes = {
    listItems: PropTypes.array,
    activeTabBackgroundColor: PropTypes.string,
    textColor: PropTypes.string,
    open: PropTypes.bool,
}

export default DrawerItemsModel