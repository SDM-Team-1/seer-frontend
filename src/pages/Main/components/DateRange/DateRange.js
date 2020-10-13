import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Box from '@material-ui/core/Box';

import style from './DateRange.module.scss';
function DateRange({ from, to, updateDate }) {
  console.log({ from, to });

  // set the minimum time as 1950 and the max as the current time
  const minDate = new Date('1950');
  const maxDate = new Date();

  const handleStartDateChange = (date) => {
    updateDate({ from: date, to });
  };
  const handleEndDateChange = (date) => {
    updateDate({ to: date, from });
  };

  return (
    <>
      <Box className={style.main}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            className={style.startDate}
            variant="inline"
            autoOk={true}
            format="yyyy"
            views={['year']}
            minDate={minDate}
            maxDate={to}
            margin="normal"
            label="From"
            value={from}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            className={style.endDate}
            variant="inline"
            autoOk={true}
            format="yyyy"
            views={['year']}
            minDate={from}
            maxDate={maxDate}
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={to}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Box>
    </>
  );
}

export default DateRange;
