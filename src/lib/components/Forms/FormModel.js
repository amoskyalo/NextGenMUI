import React from 'react';
import AutoCompleteField from './InputTypes/AutoComplete';
import SelectField from './InputTypes/Select';
import TextField from './InputTypes/TextField';
import BooleanField from './InputTypes/Boolean';
import DatesField from './InputTypes/Dates';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, CircularProgress, Box } from "@mui/material";

const FormModel = ({
  validationSchema,
  onSubmit,
  isLoading,
  inputs,
  width,
  options,
  gridColumnsCount,
  submitButtonWidth,
  buttonLabel,
  CustomTitle,
  showButton,
  CustomSubmitButton
}) => {
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
    const schema = inputs?.reduce((schemaAcc, input) => {
      const key = input.name;

      if (input.multiple) {
        let validator = Yup.array().of(Yup.string()).nullable(true);

        if (input.isRequired) {
          validator = validator.required("This field is required").min(1, "At least one item must be selected");
        }

        schemaAcc[key] = validator;
        return schemaAcc;
      }

      if (input.isBoolean) {
        let validator = Yup.string().nullable(true);

        if (input.isRequired) {
          validator = validator.required("At least one choice must be selected")
        }

        schemaAcc[key] = validator;
        return schemaAcc;
      }

      if (input.type === "dates") {
        let validator = Yup.object().nullable(true);

        if (input.isRequired) {
          validator = validator.required("Dates must be provided")
        }

        schemaAcc[key] = validator;
        return schemaAcc;
      }

      let validator = Yup.string().nullable(true);

      if (input.isRequired) {
        validator = validator.required("This field is required");
      }

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
      }

      schemaAcc[key] = validator;
      return schemaAcc;
    }, {});

    return Yup.object().shape(schema);
  };



  const getInputType = (input) => {
    if (Array.isArray(input.lookups)) {
      return input.multiple ? 'multipleAutocomplete' : 'select';
    } else if (input.isBoolean) {
      return 'boolean';
    } else if (input.type === 'dates') {
      return 'dates';
    } else {
      return 'text';
    }
  };

  const renderInput = (input, formik) => {
    switch (getInputType(input)) {
      case 'multipleAutocomplete':
        return <AutoCompleteField formik={formik} input={input} />;
      case 'select':
        return <SelectField formik={formik} input={input} />;
      case 'boolean':
        return <BooleanField formik={formik} input={input} />;
      case 'dates':
        return <DatesField formik={formik} input={input} />;
      case 'text':
      default:
        return <TextField formik={formik} input={input} />;
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
              disableElevation
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
