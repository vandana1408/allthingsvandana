import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Timeline({steps}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const stepperStyles = {
    '& .MuiStepContent-root': { // THIS ENTIRE SECTION NEEDS TO BE REFACTORED!!!
      borderLeft: '1px solid black',
    },
    '& .MuiStepConnector-line': {
      borderLeft: '1px solid black',
    },
    '& .MuiButton-containedPrimary': {
      backgroundColor: 'black',
      border: '1px',
      '&:hover': {
        backgroundColor: '#3c434a', 
      },
    },
    '& .MuiButton-textPrimary': {
      color: 'black',
      border: '1px',
    },
    '& .MuiStepIcon-root.Mui-active': {
      color: 'black', 
    },
    '& .MuiStepIcon-root.Mui-completed': {
      color: 'black', 
    },
    '& .MuiSvgIcon-root': {
      borderRadius: '1px',
      color: 'black', 
    },
  }

  return (
    <Box> 
      <Stepper activeStep={activeStep} orientation="vertical" sx={stepperStyles}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={stepperStyles}
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              )}
              {activeStep < steps.length - 1 && (
                <Button onClick={handleNext} variant="contained" sx={{ mt: 1, mr: 1 }}>
                  Continue
                </Button>
              )}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Timeline