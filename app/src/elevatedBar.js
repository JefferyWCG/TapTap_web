import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from './header.js';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Main from './main.js';
import  { useState } from 'react';

const {ENGLISH, JAPANESE} = require("./scripts/text.js")
function ElevationScroll(props) {

  //adding switching languages function

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const [scripts, setScripts] = useState(ENGLISH);

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll style={{}} nestedScrollEnabled = {true} {...props}>
        <AppBar>
          <Toolbar scripts ={scripts} setScripts ={setScripts} >
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>

     <Main style={{height:"500px",outerHeight:"500px",innerHeight:"500px"}} scripts ={scripts} setScripts ={setScripts}/>
    </React.Fragment>
  );
}
