// Treat this file like a CSS to override MUI defaults

const stepperStyles = {
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
}

export default stepperStyles

