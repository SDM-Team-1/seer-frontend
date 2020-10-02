import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import style from './MethodFilter.module.scss';

function MethodFilter() {
  const useStyles = makeStyles((theme) => ({
    autoComplete: {
      marginLeft: '1vw',
      marginRight: '1vw',
      width: '23vw',
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
    Benefit: [
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

  return (
    <Card className={style.main}>
      <Autocomplete
        options={filterOptions['Practice']}
        getOptionLabel={(option) => option.name}
        getOptionDisabled={(option) => option.isDisabled}
        className={classes.autoComplete}
        renderInput={(params) => (
          <TextField {...params} label="Practice" variant="outlined" />
        )}
      />

      <Autocomplete
        options={filterOptions['Benefit']}
        getOptionLabel={(option) => option.name}
        getOptionDisabled={(option) => option.isDisabled}
        className={classes.autoComplete}
        renderInput={(params) => (
          <TextField {...params} label="Benefit" variant="outlined" />
        )}
      />
    </Card>
  );
}

export default MethodFilter;
