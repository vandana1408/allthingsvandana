import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import stepperStyles from './Styles';

function Timeline({steps}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box> 
      <Stepper activeStep={activeStep} orientation="vertical" sx={stepperStyles}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel sx={stepperStyles}>
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