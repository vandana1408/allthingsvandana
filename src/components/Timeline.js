import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'High School Certificate: 2019',
    description: `Finishing High school and unsure what my future would look like, I only knew two things: I liked science (especially chemistry) and 
                  I wanted to do some coding subjects since coding seemed like it was going to be pretty popular and could be useful wherever I go.`,
  },
  {
    label: 'Undergraduate: 2020 - 2022',
    description: `I started the degree thinking I was going to be a researcher working in a lab. I never understood programming at the beginning and started to feel overwhelmed in my first and second year. 
                  However, during the second lockdown I started tampering around with HMTL, CSS and JavaScript on my own to make a website about knitting and crochet. 
                  With a lot of free time then, I wanted to show more tutorials on how to knit and crochet for people who might be interested. 
                  After all the lockdowns, I took on opportunities to participate in societies such as UNSW Bioinformatics Society (BINFSOC) 
                  acting as an events executive in BINFSOC to bring small cohort together through professional and social events.`,
  },
  {
    label: 'Undergraduate: 2022/23 Summer',
    description: `I did an internship in the engineering stream at an Australian bank; working in the payments area. 
                  I worked in a team to build and maintain the Terminal Management System, a website used by our customer 
                  service representatives to track the terminals that were purchased by other businesses.`,
  },
  {
    label: 'Final Year of Undergrad: 2023',
    description: `I completed my Honours on “Refactoring and Further Development of the Multilevel Genome Typing Database”, which is a website for researchers to perform the MGT method on bacterial genomes 
                  to help identify relationships between many collected isolates. My project invovled refactoring the codebase of the Django application to improve feature building, and optimising the local installation 
                  of the application for wet lab researchers running the method and app on their local machines. Towards the end of my internship I also completed an internship at a medical research institute to 
                  build a database and UI for wetlab researchers to track their experiment samples as they go through multiple processes and tracking each process in a structured way.`,
  },
  {
    label: 'Being a Working Professional: 2024',
    description: `I have returned to the bank I did my summer internship at to complete a graduate program. My first rotation was working in the HR function; building and maintaining platforms that support over 48 900 employees. 
                  My biggest achievement was building a GitHub Action that can be used for Integration Testing in Workday Extend Applications.
                  Currently working in a team that works on the accounts and transactions pages in the retail app. I work on the backend side of these applications; building and maintaining APIs that control the accounts and 
                  balances information displayed to millions of customers.`,
  },
  {
    label: 'The Future',
    description: `At the moment, I'm really intrigued by becoming a more secure programmer and integrating proper security practices in software engineering, as well as understanding cloud concepts more generally. To work on these things, I'm assisting with a graduate run Capture the Flag Competition and working towards becoming an AppSec Champion.
                  Additionally, I also want to develop further on understanding complex APIs and their flows. Most assignments in university are at a very small scale and typically programmed from scratch and joining my current team is helping me understand how improvements made to old API flows can improve our customers' experiences.`
  },
];

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box> 
      <Stepper activeStep={activeStep} orientation="vertical" sx={{
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
        }}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                '& .MuiStepContent-root': {
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
              }}
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

export default VerticalLinearStepper