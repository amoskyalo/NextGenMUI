import React from 'react'
import { Box, Typography, Checkbox, FormControl } from '@mui/material';

const renderBoolean = ({ booleanOptions, name, onChange, formik }) => (
    <Box sx={{ display: "flex", columnGap: 4, flexWrap: "wrap" }}>
        {booleanOptions.map(({ value, label, ...otherProps }) => (
            <Box key={value} sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                <Checkbox
                    sx={{ m: 0, px: 0, color: Boolean(formik.errors[name]) ? "#d33247" : null }}
                    name={name}
                    checked={formik.values[name] === value}
                    onChange={(event) => {
                        const newValue = event.target.checked ? value : null;
                        formik.setFieldValue(name, newValue, true);
                        if (onChange) {
                            onChange(event);
                        }
                    }}
                    {...otherProps}
                />
                <Typography sx={{ opacity: "70%", color: Boolean(formik.errors[name]) ? "#d33247" : null }}>{label}</Typography>
            </Box>
        ))}
    </Box>
);

const BooleanField = ({ formik, input: { booleanOptions, label, name, onChange, renderField } }) => {
    const inputProps = { formik, input: { booleanOptions, name, onChange } }

    const content = typeof renderField === "function" && React.isValidElement(renderField(inputProps)) ?
        renderField(inputProps) : (
            <FormControl>
                <Typography
                    sx={{ opacity: "70%", color: Boolean(formik.errors[name]) ? "#d33247" : null }}

                >
                    {label}
                </Typography>
                {renderBoolean({ formik, booleanOptions, label, name, onChange })}
                {formik.touched[name] && formik.errors[name] && (
                    <Typography sx={{ fontSize: 12, color: "#d33247", mt: 1 }}>
                        {formik.errors[name]}
                    </Typography>
                )}
            </FormControl>
        )

    return content
}

export default BooleanField