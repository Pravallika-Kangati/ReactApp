import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HorizontalLinearStepper from 
'./stepperTypes/HorizontalSteppers/LinearSteppers/HorizontalLinearStepper';
import HorizontalLabelPositionBelowStepper from 
'./stepperTypes/HorizontalSteppers/LinearSteppers/HorizontalLabelPositionBelowStepper';
import CustomizedStepperWithDot from 
'./stepperTypes/HorizontalSteppers/LinearSteppers/CustomizedSteppers/CustomizedStepperWithDot';
import CustomizedStepperWithIcon from 
'./stepperTypes/HorizontalSteppers/LinearSteppers/CustomizedSteppers/CustomizedStepperWithIcon';
import HorizontalNonLinearStepper from 
'./stepperTypes/HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearStepper';
import HorizontalNonLinearAlternativeLabelStepper from 
'./stepperTypes/HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearAlternativeLabelStepper';
import HorizontalNonLinearStepperWithError from 
'./stepperTypes/HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearStepperWithError';
import VerticalLinearStepper from './stepperTypes/VerticalStepper/VerticalLinearStepper';
import TextMobileStepper from './stepperTypes/MobileStepper/TextMobileStepper';
import SwipeableTextMobileStepper from './stepperTypes/MobileStepper/SwipeableTextMobileStepper';
import DotMobileStepper from './stepperTypes/MobileStepper/DotsMobileStepper';
import ProgressMobileStepper from './stepperTypes/MobileStepper/ProgressMobileStepper';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <PropDemo name="Jack" fruit="Apple" /> */}
    <TextMobileStepper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
