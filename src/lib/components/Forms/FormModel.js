import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { TextField, Select, MenuItem, FormControl, Button, CircularProgress, OutlinedInput, InputLabel, Typography, Box } from "@mui/material";

const FormModel = ({ validationSchema, onSubmit, isLoading, inputs, width, options, gridColumnsCount, submitButtonWidth, buttonLabel, CustomTitle }) => {

  function constructInitialValues() {
    let initialValues = {};
    for (let input of inputs) {
      initialValues[input.name] = input.value
    }

    return initialValues
  }

  function defaultValidationSchema() {
    const schema = {};

    for (let key of Object.keys(constructInitialValues())) {
      if (key.toLowerCase().includes("email")) {
        schema[key] = Yup.string().email("Invalid email address").required("This field required")
      } else if (key.toLowerCase().includes("password")) {
        schema[key] = Yup.string().required("This field is required")
      } else {
        schema[key] = Yup.string().required("This field is required")
      }
    }

    return Yup.object({
      ...schema,
    })
  }

  return (
    <Formik
      initialValues={constructInitialValues()}
      onSubmit={values => onSubmit(values)}
      validationSchema={validationSchema || defaultValidationSchema()}
    >
      {formik => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            height: "max-content",
            width,
            ...options?.form
          }}
        >

          {CustomTitle && <CustomTitle />}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(${gridColumnsCount}, 1fr)`,
              columnGap: 3,
              rowGap: 3,
              marginTop: 3
            }}
          >
            {inputs.map(
              (input, __) =>
                !Array.isArray(input.lookups) ?
                  (
                    <FormControl sx={{ width: "100%" }} size="small" key={input.name}>
                      <TextField
                        id={input.name}
                        fullWidth
                        label={input.label}
                        name={input.name}
                        type={input.type}
                        disabled={input?.disabled}
                        autoFocus={!!input.value}
                        variant="outlined"
                        size="small"
                        {...formik.getFieldProps(input.name)}
                        sx={{
                          "& .MuiFormLabel-root": {
                            color: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
                          },
                          "& .MuiOutlinedInput-input": {
                            color: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
                          },
                          "&:hover .MuiOutlinedInput-root fieldset": {
                            borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
                          },
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: formik.touched[input.name] && formik.errors[input.name] ? "red" : "default"
                            },
                          },
                        }}
                      />
                      {formik.touched[input.name] && formik.errors[input.name] && (
                        <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>
                          {formik.errors[input.name]}
                        </Typography>
                      )}
                    </FormControl>
                  ) :
                  (
                    <FormControl sx={{ width: "100%" }} size="small" key={input.label}>
                      <InputLabel id={`${input.name}-label`}>{input.label}</InputLabel>
                      <Select
                        labelId={`${input.name}-label`}
                        id={input.name}
                        label={input.label}
                        name={input.name}
                        multiple={input.multiselect}
                        disabled={input.disabled}
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
                          <MenuItem key={lookup.name} value={lookup?.value}>{lookup?.name}</MenuItem>
                        ))}
                      </Select>

                      {formik.touched[input.name] && formik.errors[input.name] && <Typography sx={{ fontSize: 12, color: "red", mt: 1 }}>{formik.errors[input.name]}</Typography>}
                    </FormControl>

                  )
            )}

            <Button
              type='submit'
              variant="contained"
              sx={{ textTransform: "capitalize", width: submitButtonWidth, gridColumn: `span ${gridColumnsCount}` }}
              size='medium'
            >
              {isLoading ? (<CircularProgress color="inherit" size={20} />) : buttonLabel}
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  )
}

FormModel.propTypes = {
  options: PropTypes.object,
  width: PropTypes.number,
  gridColumnsCount: PropTypes.number,
  submitButtonWidth: PropTypes.number,
  buttonLabel: PropTypes.string,
  CustomTitle: PropTypes.node,
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
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
        PropTypes.array.isRequired // for multiselect fields
      ]),
    })),
    multiselect: PropTypes.bool,
    disabled: PropTypes.bool
  })).isRequired,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
};

FormModel.defaultProps = {
  width: "100%",
  gridColumnsCount: 1,
  submitButtonWidth: "100%",
  buttonLabel: "Submit"
}

export default FormModel