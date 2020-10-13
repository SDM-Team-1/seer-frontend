import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import style from './QuickDate.module.scss';

const useStyles = makeStyles({
  buttonColor: {
    '&.Mui-selected': {
      backgroundColor: '#3284FF',
      '&:hover': { backgroundColor: '#3284FF' },
      color: 'white',
    },
    '&:hover': { backgroundColor: '#9DBFF2' },
  },
});

function QuickDate({ yearRange, onToggle }) {
  const classes = useStyles();

  return (
    <>
      <Box className={style.main}>
        <ToggleButtonGroup
          value={yearRange}
          exclusive
          onChange={onToggle}
          aria-label="Year quick select"
        >
          <ToggleButton
            className={classes.buttonColor}
            value="all"
            aria-label="left aligned"
          >
            All years
          </ToggleButton>
          <ToggleButton
            className={classes.buttonColor}
            value="10"
            aria-label="centered"
          >
            Last 10 years
          </ToggleButton>
          <ToggleButton
            className={classes.buttonColor}
            value="5"
            aria-label="right aligned"
          >
            Last 5 years
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

export default QuickDate;
