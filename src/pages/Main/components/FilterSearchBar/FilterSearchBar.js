import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

import style from './FilterSearchBar.module.scss';

function FilterSearchBar({ showSearch, updatePractice, updateBenefit }) {
  const useStyles = makeStyles((theme) => ({
    autoComplete: {
      marginLeft: '1vw',
      marginRight: '1vw',
      width: '23vw',
    },
    autoCompleteBenefit: {
      marginLeft: '1vw',
      marginRight: '1vw',
      width: '46vw',
    },
    searchButton: {
      margin: theme.spacing(1),
      marginRight: 0,
      padding: 0,
      height: '100%',
      minWidth: '15%',
      fontSize: '2em',
      color: '#fff',
      backgroundColor: '#3284FF',
    },
    iconStyle: {
      fontSize: '1.5em',
    },
  }));

  const classes = useStyles();

  const filterOptions = {
    Practice: [
      {
        name: 'Test Driven Development',
        id: 'someRandomIDString',
        isDisabled: false,
      },
      {
        name: 'Behaviour Driven Development',
        id: 'someRandomIDString',
        isDisabled: true,
      },
    ],
    Benefits: [
      {
        name: 'Improves code quality',
        id: 'someRandomIDString',
        isDisabled: false,
      },
      {
        name: 'Improves product quality',
        id: 'someRandomIDString',
        isDisabled: false,
      },
      {
        name: 'Improves team confidence',
        id: 'someRandomIDString',
        isDisabled: false,
      },
    ],
  };

  const performSearch = (e) => {
    console.log('Search !!!');
    e.preventDefault();
    showSearch();
  };

  return (
    <Card className={style.main}>
      <Autocomplete
        options={filterOptions['Practice']}
        getOptionLabel={(option) => option.name}
        getOptionDisabled={(option) => option.isDisabled}
        getOptionSelected={(option) => option.name}
        className={classes.autoComplete}
        renderInput={(params) => (
          <TextField {...params} label="Practice" variant="outlined" />
        )}
        onChange={updatePractice}
      />

      <Autocomplete
        options={filterOptions['Benefits']}
        getOptionLabel={(option) => option.name}
        multiple
        getOptionDisabled={(option) => option.isDisabled}
        getOptionSelected={(option) => option.name}
        className={classes.autoCompleteBenefit}
        renderInput={(params) => (
          <TextField {...params} label="Benefits" variant="outlined" />
        )}
        onChange={updateBenefit}
      />

      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.searchButton}
        onClick={performSearch}
      >
        <SearchIcon className={classes.iconStyle} />
      </Button>
    </Card>
  );
}

export default FilterSearchBar;
