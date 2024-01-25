import React from 'react';
import { Box, Typography, Checkbox, FormControl } from '@mui/material';

const CheckboxOption = ({ name, value, label, isChecked, onChange, checkboxColor, labelColor }) => (
    <Box key={value} sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
        <Checkbox
            sx={{ m: 0, px: 0, color: checkboxColor, flex: 1 }}
            name={name}
            checked={isChecked}
            onChange={onChange}
        />
        <Typography sx={{ opacity: "70%", color: labelColor }}>{label}</Typography>
    </Box>
);

const renderBoolean = ({ booleanOptions, name, onChange, formik, multiple }) => {
    const isError = formik.touched[name] && Boolean(formik.errors[name]);
    const checkboxColor = isError ? "#d33247" : undefined;
    const labelColor = isError ? "#d33247" : undefined;

    const isChecked = value => multiple
        ? Array.isArray(formik.values[name]) && formik.values[name].includes(value)
        : formik.values[name] === value;

    const handleCheckboxChange = (value, event) => {
        if (multiple) {
            const updatedValues = event.target.checked
                ? [...formik.values[name], value]
                : formik.values[name].filter(item => item !== value);
            formik.setFieldValue(name, updatedValues);
        } else {
            formik.setFieldValue(name, event.target.checked ? value : null);
        }
        if (typeof onChange === 'function') onChange(event);
    };

    return (
        <Box sx={{ display: "flex", columnGap: 2, flexWrap: "wrap" }}>
            {booleanOptions.map(option => {
                const { value, label } = typeof option === "object" ? option : { value: option, label: option };
                return (
                    <CheckboxOption
                        key={value}
                        name={name}
                        value={value}
                        label={label}
                        isChecked={isChecked(value)}
                        onChange={(event) => handleCheckboxChange(value, event)}
                        checkboxColor={checkboxColor}
                        labelColor={labelColor}
                    />
                );
            })}
        </Box>
    );
};

const BooleanField = ({ formik, input: { booleanOptions, label, name, onChange, multiple, renderField } }) => {
    const inputProps = { formik, input: { booleanOptions, name, onChange } };
    const isError = formik.touched[name] && Boolean(formik.errors[name]);
    const labelColor = isError ? "#d33247" : null;

    const content = typeof renderField === 'function' && React.isValidElement(renderField(inputProps))
        ? renderField(inputProps)
        : (
            <FormControl>
                <Typography sx={{ opacity: "70%", color: labelColor }}>
                    {label}
                </Typography>
                {renderBoolean({ formik, booleanOptions, name, onChange, multiple })}
                {isError && (
                    <Typography sx={{ fontSize: 12, color: "#d33247", mt: 1 }}>
                        {formik.errors[name]}
                    </Typography>
                )}
            </FormControl>
        );

    return content;
}

export default BooleanField;
