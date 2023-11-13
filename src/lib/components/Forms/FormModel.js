import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Select, MenuItem, FormControl, Button, CircularProgress, OutlinedInput, InputLabel } from "@mui/material";

const FormModel = ({ onFieldChange, onSubmit, isLoading, disableSubmitButton, inputs, width, options, gridColumnsCount, submitButtonWidth }) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridColumnsCount}, 1fr)`,
        columnGap: 24,
        rowGap: 24,
        height: "max-content",
        width,
        ...options?.form
      }}
    >
      {inputs.map(
        (input, __) =>
          !Array.isArray(input.lookups) ?
            (
              <FormControl sx={{ width: "100%" }} size="small">
                <TextField
                  key={input.label}
                  value={input.value || ''}
                  label={input.label}
                  name={input.name}
                  type={input.type}
                  disabled={input?.disabled}
                  onChange={onFieldChange}
                  autoFocus={!!input.value}
                  required={input.required}
                  variant="outlined"
                  size="small"
                />
              </FormControl>
            ) :
            (
              <FormControl sx={{ width: "100%" }} size="small">
                <InputLabel id={`${input.name}-label`}>{input.label}</InputLabel>
                <Select
                  labelId={`${input.name}-label`}
                  key={input.label}
                  label={input.label}
                  name={input.name}
                  onChange={onFieldChange}
                  multiple={input.multiselect}
                  disabled={input.disabled}
                  required={input.required}
                  value={input.multiselect ? input.selectValue : input.value !== null ? input.value : ''}
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
                    <MenuItem key={lookup.name} value={lookup?.value}>{lookup?.name} </MenuItem>
                  ))}
                </Select>
              </FormControl>

            )
      )}

      <Button
        type='submit'
        variant="contained"
        sx={{ textTransform: "capitalize", height: 42, width: submitButtonWidth, gridColumn: `span ${gridColumnsCount}` }}
        disabled={disableSubmitButton}
      >
        {isLoading ? (<CircularProgress color="inherit" size={24} />) : "Submit"}
      </Button>
    </form>
  )
}

FormModel.propTypes = {
  options: PropTypes.object,
  width: PropTypes.number,
  gridColumnsCount: PropTypes.number,
  submitButtonWidth: PropTypes.number,
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
  disableSubmitButton: PropTypes.bool,
  isLoading: PropTypes.bool,
  onSubmit: PropTypes.func,
  onFieldChange: PropTypes.func
};

FormModel.defaultProps = {
  width: 300,
  disableSubmitButton: false,
  gridColumnsCount: 1,
  submitButtonWidth: "100%"
}

export default FormModel