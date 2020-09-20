import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import style from './Searchbar.module.scss';
// import style from './Searchbar.module.scss';

function Searchbar() {
  const useStyles = makeStyles((theme) => ({
    searchButton: {
      margin: theme.spacing(1),
      marginRight: 0,
      padding: 0,
      height: '100%',
      minWidth: '10%',
      fontSize: '2em',
      color: '#fff',
      backgroundColor: '#3284FF',
    },
    iconStyle: {
      fontSize: '1.5em',
    },
  }));

  const minDate = new Date('2000');
  const maxDate = new Date();
  const [selStartDate, setSelStartDate] = React.useState(new Date('2010'));
  const [selEndDate, setSelEndDate] = React.useState(maxDate);
  const handleStartDateChange = (date) => {
    setSelStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelEndDate(date);
  };

  const classes = useStyles();
  return (
    <>
      <Card className={style.main}>
        <TextField
          className={style.searchBox}
          label="Search description"
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils} className={style.Picker}>
          <KeyboardDatePicker
            className={style.startDate}
            variant="inline"
            autoOk={true}
            format="MMM/yyyy"
            views={['year', 'month']}
            minDate={minDate}
            maxDate={maxDate}
            margin="normal"
            label="Start Time"
            value={selStartDate}
            onChange={handleStartDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            variant="inline"
            autoOk={true}
            format="MMM/yyyy"
            views={['year', 'month']}
            minDate={selStartDate}
            maxDate={maxDate}
            margin="normal"
            id="date-picker-inline"
            label="End Time"
            value={selEndDate}
            onChange={handleEndDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.searchButton}
        >
          <SearchIcon className={classes.iconStyle} />
        </Button>
      </Card>
    </>
  );
}

export default Searchbar;
