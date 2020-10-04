import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Card from '@material-ui/core/Card';

import style from './Searchbar.module.scss';

function Searchbar() {
  // set the minimum time as 1950 and the max as the current time 
  const minDate = new Date('1950');
  const maxDate = new Date();
  const [fromDate, setFromDate] = React.useState(new Date('2010'));
  const [toDate, setToDate] = React.useState(maxDate);

  const handleStartDateChange = (date) => {
    setFromDate(date);
  };
  const handleEndDateChange = (date) => {
    setToDate(date);
  };

  return (
    <>
      <Card className={style.main}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} className={style.Picker}>
          <KeyboardDatePicker
            className={style.startDate}
            variant="inline"
            autoOk={true}
            format="yyyy"
            views={['year']}
            minDate={minDate}
            maxDate={maxDate}
            margin="normal"
            label="From"
            value={fromDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            variant="inline"
            autoOk={true}
            format="yyyy"
            views={['year']}
            minDate={fromDate}
            maxDate={maxDate}
            margin="normal"
            id="date-picker-inline"
            label="To"
            value={toDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </Card>
    </>
  );
}

export default Searchbar;
