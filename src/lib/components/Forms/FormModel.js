import React from 'react';
import PropTypes from 'prop-types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as Yup from 'yup';
import { useState } from 'react';
import { Formik } from 'formik';
import { Checkbox, InputAdornment, IconButton, TextField, Select, MenuItem, FormControl, Button, CircularProgress, OutlinedInput, InputLabel, Typography, Box, Autocomplete } from "@mui/material";

const FormModel = ({ validationSchema, onSubmit, isLoading, inputs, width, options, gridColumnsCount, submitButtonWidth, buttonLabel, CustomTitle, showButton, CustomSubmitButton }) => {
  const [visiblePasswordFields, setVisiblePasswordFields] = useState([]);

  const toggleVisibility = (fieldName) => {
    setVisiblePasswordFields(prev => (
      prev.includes(fieldName) ? prev.filter(name => name !== fieldName) : [...prev, fieldName]
    ));
  }

  const constructInitialValues = () => {
    let initialValues = {};

    for (let input of inputs) {
      if (input.multiple) {
        const valuesArray = Array.isArray(input.value) ? input.value : [];
        initialValues[input.name] = valuesArray.map(item => item.value);
      } else {
        initialValues[input.name] = input.value !== undefined ? input.value : '';
      }
    }

    return initialValues;
  };

  const getDefaultValidationSchema = () => {
    const schema = inputs.reduce((schemaAcc, input) => {
      const key = input.name;
      let validator = Yup.string().required("This field is required");

      if (key.toLowerCase().includes("email")) {
        validator = validator.email("Invalid email address");
      } else if (key.toLowerCase().includes("password")) {
        validator = validator
          .min(8, "Password must be at least 8 characters long")
          .matches(/[a-zA-Z]/, "Password must contain at least one letter")
          .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
          .matches(/[a-z]/, "Password must contain at least one lowercase letter")
          .matches(/\d/, "Password must contain at least one number")
          .matches(/[\W_]/, "Password must contain at least one special character");
      } else if (Array.isArray(input.value)) {
        validator = Yup.array()
          .of(Yup.string().required("This field is required"))
          .min(1, "At least one value is required")
          .required("This field is required");
      }
      schemaAcc[key] = validator;
      return schemaAcc;
    }, {});

    return Yup.object().shape(schema);
  }

  const renderInput = (input, formik) => {
    if (Array.isArray(input.lookups)) {
      return input.multiple ? (
        <FormControl sx={{ width: "100%" }} size="small" key={input.label}>
          <Autocomplete
            key={input.name}
            multiple
            id={input.name}
            defaultValue={input.value}
            options={input.lookups}
            getOptionLabel={(option) => option.title}
            disabled={input.disabled}
            size='small'
            onChange={(__, newValue) => {
              const newValues = newValue.map(item => item.value);
              formik.setFieldValue(input.name, newValues);
            }}

            renderInput={(params) => (
              <TextField
                {...params}
                error={formik.touched[input.name] && Boolean(formik.errors[input.name])}
                helperText={formik.touched[input.name] && formik.errors[input.name]}
                label={input.label}
                size='small'
                fullWidth
              />
            )}
          />
        </FormControl>
      ) : (
        <FormControl sx={{ width: "100%" }} size="small" key={input.label}>
          <InputLabel id={`${input.name}-label`}>{input.label}</InputLabel>
          <Select
            labelId={`${input.name}-label`}
            id={input.name}
            label={input.label}
            name={input.name}
            disabled={input.disabled}
            error={formik.touched[input.name] && Boolean(formik.errors[input.name])}
            helperText={formik.touched[input.name] && formik.errors[input.name]}
            {...formik.getFieldProps(input.name)}
            input={<OutlinedInput label={input.label} />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  overflowY: 'auto',
                },
              },
            }}
          >
            {input?.lookups.map((lookup, __) => (
              <MenuItem key={lookup.title} value={lookup?.value}>{lookup?.title}</MenuItem>
            ))}
          </Select>
          {formik.touched[input.name] && formik.errors[input.name] && <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>{formik.errors[input.name]}</Typography>}
        </FormControl>
      );
    } else if (input.isBoolean) {
      return (
        <FormControl>
          <Typography sx={{ opacity: "70%" }}>{input.label}</Typography>
          <Box sx={{ display: "flex", columnGap: 4, flexWrap: "wrap" }}>
            {input.booleanOptions.map((option) => (
              <Box key={option.value} sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
                <Checkbox
                  sx={{ m: 0, px: 0 }}
                  name={input.name}
                  value={option.value}
                  checked={formik.values[input.name] === option.value}
                  onChange={(event) => {
                    const newValue = event.target.checked ? option.value : null;
                    formik.setFieldValue(input.name, newValue, true);
                  }}
                />
                <Typography sx={{ opacity: "70%" }}>{option.label}</Typography>
              </Box>
            ))}
          </Box>
          {formik.touched[input.name] && formik.errors[input.name] && (
            <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>
              {formik.errors[input.name]}
            </Typography>
          )}
        </FormControl>
      )
    } else {
      return (
        <FormControl sx={{ width: "100%" }} size="small" key={input.name}>
          <InputLabel htmlFor={input.name}>{input.label}</InputLabel>
          <OutlinedInput
            id={input.name}
            fullWidth
            label={input.label}
            name={input.name}
            error={formik.touched[input.name] && Boolean(formik.errors[input.name])}
            helperText={formik.touched[input.name] && formik.errors[input.name]}
            type={input.type === "password" && visiblePasswordFields.includes(input.name) ? "text" : input.type}
            disabled={input?.disabled}
            autoFocus={!!input.value}
            variant="outlined"
            size="small"
            {...formik.getFieldProps(input.name)}
            endAdornment={
              input.type === "password" &&
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => toggleVisibility(input.name)}
                  edge="end"
                >
                  {visiblePasswordFields.includes(input.name) ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {formik.touched[input.name] && formik.errors[input.name] && (
            <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>
              {formik.errors[input.name]}
            </Typography>
          )}
        </FormControl>
      );
    }
  };

  return (
    <Formik
      initialValues={constructInitialValues()}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={validationSchema || getDefaultValidationSchema()}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} style={{ height: "max-content", width, ...options?.form }}>
          {CustomTitle && <CustomTitle />}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridColumnsCount}, 1fr)`,
              gap: 3,
              marginTop: 3
            }}
          >
            {inputs.map(input => renderInput(input, formik))}
            {showButton && !CustomSubmitButton && <Button
              type='submit'
              variant="contained"
              sx={{ textTransform: "capitalize", width: submitButtonWidth, gridColumn: `span ${gridColumnsCount}` }}
              size='medium'
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress color="inherit" size={20} /> : buttonLabel}
            </Button>}

            {CustomSubmitButton && showButton && <CustomSubmitButton />}
          </Box>
        </form>
      )}
    </Formik>
  )
}

FormModel.propTypes = {
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    required: PropTypes.bool.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]),
    lookups: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.array.isRequired
      ]),
    })),
    multiselect: PropTypes.bool,
    isBoolean: PropTypes.bool,
    booleanOptions: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.array.isRequired
      ]),
    })),
    disabled: PropTypes.bool
  })).isRequired,
  width: PropTypes.string,
  options: PropTypes.object,
  gridColumnsCount: PropTypes.number,
  submitButtonWidth: PropTypes.string,
  buttonLabel: PropTypes.string,
  CustomTitle: PropTypes.node
};

FormModel.defaultProps = {
  width: "100%",
  gridColumnsCount: 1,
  submitButtonWidth: "100%",
  buttonLabel: "Submit",
  isLoading: false,
  showButton: true
};

export default FormModel;
