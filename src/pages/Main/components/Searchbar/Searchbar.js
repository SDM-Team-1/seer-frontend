import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';

import style from './Searchbar.module.scss';
// import style from './Searchbar.module.scss';

function Searchbar() {
  const selectedStartDate = new Date('2014');
  const selectedEndDate = new Date('2020');
  return (
    <Card className={style.main}>
      <TextField
        className={style.searchBox}
        label="Search description"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils} className={style.Picker}>
        <KeyboardDatePicker
          variant="inline"
          autoOk={true}
          format="MMM/yyyy"
          views={['year', 'month']}
          minDate="2000"
          maxDate="2021"
          margin="normal"
          label="Start Time"
          value={selectedStartDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          variant="inline"
          autoOk={true}
          format="MMM/yyyy"
          views={['year', 'month']}
          minDate="2000"
          maxDate="2021"
          margin="normal"
          id="date-picker-inline"
          label="End Time"
          value={selectedEndDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Card>
  );
}

const handleDateChange = (date) => {
  console.log(date);
};

export default Searchbar;
