import React from 'react';
import { Autocomplete, TextField, FormControl } from '@mui/material';

const renderAutocomplete = ({ name, label, lookups, formik, ...otherProps }) => (
    <Autocomplete
        key={name}
        multiple
        id={name}
        options={lookups}
        getOptionLabel={(option) => option.title}
        onChange={(__, newValue) => {
            const newValues = newValue.map(item => item.value);
            formik.setFieldValue(name, newValues);
        }}
        renderInput={(params) => (
            <TextField
                {...params}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
                label={label}
                fullWidth
            />
        )}
        {...otherProps}
    />
);

const AutoCompleteField = ({ input: { renderField, name, lookups, label, ...otherProps }, formik }) => {
    const inputProps = { formik, input: { name, lookups, label, ...otherProps } };

    const content = typeof renderField === "function" && React.isValidElement(renderField(inputProps))
        ? renderField(inputProps)
        : (
            <FormControl sx={{ width: "100%" }} key={label}>
                {renderAutocomplete({ name, label, lookups, formik, ...otherProps })}
            </FormControl>
        );

    return content;
}

export default AutoCompleteField;
