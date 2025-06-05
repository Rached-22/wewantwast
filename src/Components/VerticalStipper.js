import React, { useState, useEffect } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Typography,
  Paper,
  Grid,
} from '@mui/material';
import SelectSkip from './SelectSkip';
import $ from 'jquery';
import SplashScreen from './SplashScreen';


const VerticalStipper = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [openedRecaps, setOpenedRecaps] = useState([0, 1, 2]);
  const [selectedSkip, setSelectedSkip] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

  }, []);

  useEffect(() => {

    const timer = setTimeout(() => {
      $('.MuiGrid-root.MuiGrid-spacing-xs-2').addClass('row');
      $($(".MuiGrid-root.MuiGrid-direction-xs-row.css-17fpwt7-MuiGrid-root")[0]).addClass('col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-4 col-4 LeftPanel');
      $($(".MuiGrid-root.MuiGrid-direction-xs-row.css-17fpwt7-MuiGrid-root")[1]).addClass('col-xl-9 col-lg-9 col-md-9 col-sm-8 col-xs-8 col-8');

      setLoading(false);

      $(".Start").show()
    }, 2000);
    return () => clearTimeout(timer);

  }, []);
  const steps = [
    //PostCode
    {
      label: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
            style={{ marginRight: '8px' }}
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          PostCode
        </>
      ),
      recap: (
        <ul className="timeline-list">
          <li>City: Hinckley</li>
          <li>Street Name: Ashby Road</li>
          <li>House/Flat Number: 119</li>
        </ul>
      ),
      description: (
        <></>
      ),
    },
    //wastType
    {
      label: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-trash2 w-6 h-6"
            style={{ marginRight: '8px' }}
          >
            <path d="M3 6h18"></path>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>

          Waste Type
        </>
      ),
      description: (
        <div className="description">
        </div>
      ),
      recap: (
        <>
          <ul className='timeline-list'>
            <li>Type of waste disposed: Garden Waste</li>
            <li>Heavy Waste Types: Soil</li>
            <li>Quantity of Heavy Waste You Will  Put In The Skip: 5-10%</li>
            <li>Plasterboard :No</li>
          </ul>
        </>
      ),
    },
    //select skip
    {
      label: (

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-truck w-6 h-6"
            style={{ marginRight: '8px' }}
          >
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
            <path d="M15 18H9"></path>
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
            <circle cx="17" cy="18" r="2"></circle>
            <circle cx="7" cy="18" r="2"></circle>
          </svg>
          Select Skip
        </>
      ),
      description: (
        <div className="description">
          <SelectSkip onSelectSkip={setSelectedSkip} />
        </div>
      ),
      recap: selectedSkip ? (
        <ul className="timeline-list">
          <li>SKIP: {selectedSkip.size} yards </li>
          <li>{selectedSkip.hire_period_days} day hire period</li>
          <li>Price: <span style={{ color: "#1976d2", fontWeight: 'bold' }}> £{selectedSkip.price_before_vat}</span> </li>
        </ul>
      ) : (
        <Typography style={{ marginLeft: '5%', fontSize: '12px' }} variant="body2">No skip selected yet.</Typography>
      )

    },
    //permit check
    {
      label: (

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shield w-6 h-6"
            style={{ marginRight: '8px' }}
          >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
          </svg>

          Permit Check
        </>
      ),
      description: (
        <>


        </>
      ), recap: (
        <>
          <ul className='timeline-list'>
            <li>the skip will be placed in :Public Road</li>

          </ul>

        </>
      )
    },
    //choose date
    {
      label: (

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-calendar w-6 h-6"
            style={{ marginRight: '8px' }}
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>


          Choose Date
        </>
      ),
      description: (
        <>

        </>
      ), recap: (
        <>
          <ul className='timeline-list'>
            <li>Delivry Date: 11 Juin 2025</li>
            <li>Collection Date: 18 Juin 2025</li>
          </ul>
        </>

      )
    },
    //Payment
    {
      label: (

        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-credit-card w-6 h-6"
            style={{ marginRight: '8px' }}
          >
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" y1="10" x2="22" y2="10"></line>
          </svg>

          Payment
        </>
      ),
      description: (
        <>

        </>
      ),
      recap: (
        <>
          <ul className='timeline-list'>
            <li>Total: £390.00</li>
            <li>Numero de carte: 1234 1234 1234 1234</li>
            <li>Date d'expiration: 11/2025</li>
            <li>Code de sécurité: CVC</li>
            <li>Pays: Tunisie</li>
            <li>Code postal: 1111</li>
          </ul>

        </>

      )
    },






  ];



  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      {loading && <div className="splasher"><SplashScreen /></div>}
      <Box className="Start" sx={{ width: '100%', minHeight: '100vh', pb: 10, display: 'none' }}>
        <Grid container spacing={2}>
          {/* Left column: Stepper */}
          <Grid item xs={12} md={4}>
            <Stepper className="Stepper-container" activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={index} expanded>
                  <StepLabel>{step.label}</StepLabel>
                  {activeStep >= index /*&& !openedRecaps.includes(index) */ && (
                    <Box sx={{ pl: 3, pb: 2 }}>{step.recap}</Box>
                  )}
                </Step>
              ))}
            </Stepper>
          </Grid>

          {/* Right column: Description */}
          <Grid item xs={12} md={8}>
            {steps[activeStep]?.description}
          </Grid>
        </Grid>

        {/* Completed message */}
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed — you’re finished!</Typography>

          </Paper>
        )}

        {/* Footer Buttons */}
        <Paper
          elevation={3}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
            zIndex: 999,
          }}
        >
          <Button
            disabled={activeStep === 2}
            onClick={handleBack}
            variant="outlined"
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={handleNext}
            disabled={activeStep >= steps.length}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Continue'}
          </Button>
        </Paper>
      </Box>
    </>
  );



}


export default VerticalStipper;
