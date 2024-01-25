import React from 'react'
import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput, IconButton, Typography, InputAdornment } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// function fields(type) {
//     switch (type) {
//         case 'textField':
//             return <TextField {...props} />;
//             break;
//         case 'outlined':
//             return <OutlinedInput {...props} />;
//             break;
//     }
// }

const renderTextField = ({ formik, name, label, type, onChange, visiblePasswordFields, toggleVisibility, ...otherProps }) => (
    <OutlinedInput
        id={name}
        fullWidth
        label={label}
        name={name}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        type={type === "password" && visiblePasswordFields.includes(name) ? "text" : type}
        variant="outlined"
        onChange={e => {
            formik.setFieldValue(name, e.target.value);
            if (onChange) {
                onChange(e);
            }
        }}
        endAdornment={
            type === "password" &&
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => toggleVisibility(name)}
                    edge="end"
                >
                    {visiblePasswordFields.includes(name) ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
        {...otherProps}
    />
)

const TextField = ({ formik, input: { name, label, type, onChange, renderField, ...otherProps } }) => {
    const [visiblePasswordFields, setVisiblePasswordFields] = useState([]);

    const toggleVisibility = (fieldName) => {
        setVisiblePasswordFields(prev => (
            prev.includes(fieldName) ? prev.filter(name => name !== fieldName) : [...prev, fieldName]
        ));
    };

    const inputProps = { formik, input: { name, label, type, onChange, renderField, ...otherProps } }

    const content = typeof renderField === 'function' && React.isValidElement(renderField(inputProps)) ?
        renderField(inputProps) : (
            <FormControl sx={{ width: "100%" }} size="small" key={name}>
                <InputLabel htmlFor={name} error={formik.touched[name] && Boolean(formik.errors[name])}>{label}</InputLabel>
                {renderTextField({ formik, name, label, type, onChange, visiblePasswordFields, toggleVisibility, ...otherProps })}
                {formik.touched[name] && formik.errors[name] && (
                    <Typography sx={{ fontSize: 12, color: "#d33247", mt: 1 }}>
                        {formik.errors[name]}
                    </Typography>
                )}
            </FormControl>
        )

    return content
}

export default TextField