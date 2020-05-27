import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import VerticalLinearStepper from './VerticalStepper/VerticalLinearStepper';
import TextMobileStepper from './MobileStepper/TextMobileStepper';
import SwipeableTextMobileStepper from './MobileStepper/SwipeableTextMobileStepper';
import DotMobileStepper from './MobileStepper/DotsMobileStepper';
import ProgressMobileStepper from './MobileStepper/ProgressMobileStepper';
import CustomizedStepperWithDot from 
'./HorizontalSteppers/LinearSteppers/CustomizedSteppers/CustomizedStepperWithDot';
import CustomizedStepperWithIcon from 
'./HorizontalSteppers/LinearSteppers/CustomizedSteppers/CustomizedStepperWithIcon';
import HorizontalLabelPositionBelowStepper from 
'./HorizontalSteppers/LinearSteppers/HorizontalLabelPositionBelowStepper';
import HorizontalLinearStepper from 
'./HorizontalSteppers/LinearSteppers/HorizontalLinearStepper';
import HorizontalNonLinearStepper from 
'./HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearStepper';
import HorizontalNonLinearAlternativeLabelStepper from 
'./HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearAlternativeLabelStepper';
import HorizontalNonLinearStepperWithError from 
'./HorizontalSteppers/NonLinearSteppers/HorizontalNonLinearStepperWithError';

class StepperRouting extends React.Component {
    render() {
        return (
          <Router>
            <React.Fragment>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href={'/'}>Steppers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Horizontal Linear Steppers" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={'/HorizontalLinearStepper'}>Linear Stepper</NavDropdown.Item>
                                    <NavDropdown.Item href={'/HorizontalLabelPositionBelowStepper'}>Linear Stepper With AlternativeLabel</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Horizontal Non-Linear Steppers" id="basic-nav-dropdown">
                                    <NavDropdown.Item href={'/HorizontalNonLinearStepper'}>Non-Linear Stepper</NavDropdown.Item>
                                    <NavDropdown.Item href={'/HorizontalNonLinearAlternativeLabelStepper'}>Non-Linear Stepper With AlternativeLabel</NavDropdown.Item>
                                    <NavDropdown.Item href={'/HorizontalNonLinearStepperWithError'}>Non-Linear Stepper With Error Step</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Vertical Steppers" id="basic-nav-dropdown">
                                <NavDropdown.Item href={'/VerticalLinearStepper'}>Linear Stepper</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Customized Steppers" id="basic-nav-dropdown">
                                <NavDropdown.Item href={'/CustomizedStepperWithDot'}>Customized Stepper With Dot</NavDropdown.Item>
                                <NavDropdown.Item href={'/CustomizedStepperWithIcon'}>Customized Stepper With Icon</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Mobile Steppers" id="basic-nav-dropdown">
                                <NavDropdown.Item href={'/TextMobileStepper'}>Text Mobile Stepper</NavDropdown.Item>
                                <NavDropdown.Item href={'/SwipeableTextMobileStepper'}>Swipeable Text Mobile Stepper</NavDropdown.Item>
                                <NavDropdown.Item href={'/DotMobileStepper'}>Dot Mobile Stepper</NavDropdown.Item>
                                <NavDropdown.Item href={'/ProgressMobileStepper'}>Progress Mobile Stepper</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
                <div>
                    <Switch>
                        <Route path="/HorizontalLinearStepper" component={HorizontalLinearStepper}/>
                        <Route path="/HorizontalLabelPositionBelowStepper" component={HorizontalLabelPositionBelowStepper}/>
                        <Route path="/HorizontalNonLinearStepper" component={HorizontalNonLinearStepper}/>
                        <Route path="/HorizontalNonLinearAlternativeLabelStepper" component={HorizontalNonLinearAlternativeLabelStepper}/>
                        <Route path="/HorizontalNonLinearStepperWithError" component={HorizontalNonLinearStepperWithError}/>
                        <Route path="/VerticalLinearStepper" component={VerticalLinearStepper}/>
                        <Route path="/CustomizedStepperWithDot" component={CustomizedStepperWithDot}/>
                        <Route path="/CustomizedStepperWithIcon" component={CustomizedStepperWithIcon}/>
                        <Route path="/TextMobileStepper" component={TextMobileStepper}/>
                        <Route path="/SwipeableTextMobileStepper" component={SwipeableTextMobileStepper}/>
                        <Route path="/DotMobileStepper" component={DotMobileStepper}/>
                        <Route path="/ProgressMobileStepper" component={ProgressMobileStepper}/>
                    </Switch>
                </div>
            </React.Fragment>
          </Router>   
        );
    }
}
export default StepperRouting;