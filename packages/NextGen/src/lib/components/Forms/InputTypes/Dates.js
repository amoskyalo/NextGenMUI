import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl } from '@mui/material';

const DatesField = ({ formik, input: { label, name, onChange } }) => {
    return (
        <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    size="small"
                    name={name}
                    label={label}
                    error={formik.touched[name] && Boolean(formik.errors[name])}
                    helperText={formik.touched[name] && formik.errors[name]}
                    onChange={value => {
                        formik.setFieldValue(name, value);
                        if (onChange) {
                            onChange(value)
                        }
                    }}
                    sx={{
                        ".MuiOutlinedInput-input": {
                            paddingY: "8px",
                            borderRadius: "5px"
                        },
                        ".MuiInputLabel-root": { top: formik.values[name] ? 0 : -7 }
                    }}
                />
            </LocalizationProvider>
        </FormControl>
    )
}

export default DatesField