import React from 'react'
import { Select, OutlinedInput, MenuItem, FormControl, InputLabel, Typography } from '@mui/material';

const renderSelect = ({ formik, name, label, onChange, lookups, ...otherProps }) => (
    <Select
        labelId={`${name}-label`}
        id={name}
        label={label}
        name={name}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        input={<OutlinedInput label={label} />}
        onChange={e => {
            formik.setFieldValue(name, e.target.value, true);
            if (onChange) {
                onChange(e);
            }
        }}
        MenuProps={{
            PaperProps: {
                style: {
                    maxHeight: 300,
                    overflowY: 'auto',
                },
            },
        }}
        {...otherProps}
    >
        {lookups.map((lookup, __) => (
            <MenuItem key={lookup.title} value={lookup?.value}>{lookup?.title}</MenuItem>
        ))}
    </Select>
);

const SelectField = ({ formik, input: { name, label, onChange, lookups, renderField, ...otherProps } }) => {
    const inputProps = { formik, input: { name, label, onChange, lookups, ...otherProps } };

    const content = typeof renderField === "function" && React.isValidElement(renderField(inputProps)) ?
        renderField(inputProps) : (
            <FormControl sx={{ width: "100%" }} size='small' key={label}>
                <InputLabel error={formik.touched[name] && Boolean(formik.errors[name])} id={`${name}-label`}>{label}</InputLabel>
                {renderSelect({ formik, name, label, onChange, lookups, ...otherProps })}
                {formik.touched[name] && formik.errors[name] && <Typography sx={{ fontSize: 12, color: "#d33247", mt: 1 }}>{formik.errors[name]}</Typography>}
            </FormControl>
        );

    return content
}

export default SelectField