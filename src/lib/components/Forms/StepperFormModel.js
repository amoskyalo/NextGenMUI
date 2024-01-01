import React from 'react';
import FormModel from './FormModel';
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { Step, Stepper, Box, StepLabel, Button } from '@mui/material';

const StepperFormModel = ({ getActiveStep, steps, onFieldChange, isLoading, onSubmit, width, buttonLabel, submitButtonWidth, gridColumnsCount, options, CustomSubmitButton }) => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        if (typeof getActiveStep === 'function') {
            getActiveStep(activeStep)
        }
    }, [activeStep]);

    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep = activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ width, ...options?.stepper }}>
            <Stepper sx={{ mb: 4 }} activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label.label}>
                        <StepLabel>{label.label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <FormModel
                onFieldChange={onFieldChange}
                inputs={steps[activeStep]?.inputs}
                // buttonLabel={!isLastStep() ? "Proceed" : buttonLabel}
                isLoading={isLoading}
                onSubmit={onSubmit}
                showButton={isLastStep()}
                submitButtonWidth={submitButtonWidth}
                gridColumnsCount={gridColumnsCount}
                options={options}
                CustomSubmitButton={CustomSubmitButton}
            />

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                {activeStep !== 0 &&
                    <Button
                        color="inherit"
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>}
                <Box sx={{ flex: '1 1 auto' }} />
                {!isLastStep() && <Button onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                </Button>}
            </Box>
        </Box>
    );
}

StepperFormModel.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        inputs: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            type: PropTypes.string,
            label: PropTypes.string.isRequired,
            value: PropTypes.any.isRequired,
            required: PropTypes.bool
        })).isRequired,
    })),
    onFieldChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    gridColumnsCount: PropTypes.number,
    submitButtonWidth: PropTypes.number,
    buttonLabel: PropTypes.string,
    options: PropTypes.object
}

export default StepperFormModel