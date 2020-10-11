import React from 'react';
import Box from '@material-ui/core/Box';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import style from './QuickDate.module.scss';

function QuickDate() {
  const [yearToggleVal, setYearToggleVal] = React.useState('all');
  const handleYearToggle = (_, toggleVal) => {
    setYearToggleVal(toggleVal);
    console.log(toggleVal);
  };

  return (
    <>
      <Box className={style.main}>
        <ToggleButtonGroup
          value={yearToggleVal}
          exclusive
          onChange={handleYearToggle}
          aria-label="Year quick select"
        >
          <ToggleButton value="all" aria-label="left aligned">
            All years
          </ToggleButton>
          <ToggleButton value="10" aria-label="centered">
            Last 10 years
          </ToggleButton>
          <ToggleButton value="5" aria-label="right aligned">
            Last 5 years
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  );
}

export default QuickDate;
