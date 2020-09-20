import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import style from './MethodFilter.module.scss';

function MethodFilter() {
  const useStyles = makeStyles((theme) => ({
    If: {
      marginLeft: '1vw',
    },
    autoComplete: {
      marginLeft: '1vw',
      width: '22%',
    },
  }));

  const classes = useStyles();

  const nameOfField = [
    { name: 'Method', isDisabled: false },
    { name: 'Benefit', isDisabled: true },
    { name: 'Participants', isDisabled: true },
  ];
  const operators = [
    { name: 'Contains', isDisabled: true },
    { name: 'Does NOT contain', isDisabled: true },
    { name: 'Begins with', isDisabled: true },
    { name: 'Ends with', isDisabled: true },
    { name: 'Is equal to', isDisabled: false },
  ];
  const values = {
    Method: [
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
    Benefit: [{}],
    Participants: [{}],
  };

  return (
    <Card className={style.main}>
      <Typography variant="h3" component="h3" className={classes.If}>
        If
      </Typography>
      <Autocomplete
        options={nameOfField}
        getOptionLabel={(option) => option.name}
        className={classes.autoComplete}
        getOptionDisabled={(option) => option.isDisabled}
        renderInput={(params) => (
          <TextField {...params} label="Name of the field" variant="outlined" />
        )}
      />
      <Autocomplete
        options={operators}
        getOptionLabel={(option) => option.name}
        getOptionDisabled={(option) => option.isDisabled}
        className={classes.autoComplete}
        renderInput={(params) => (
          <TextField {...params} label="Operators" variant="outlined" />
        )}
      />
      <Autocomplete
        options={values['Method']}
        getOptionLabel={(option) => option.name}
        getOptionDisabled={(option) => option.isDisabled}
        className={classes.autoComplete}
        renderInput={(params) => (
          <TextField {...params} label="Values" variant="outlined" />
        )}
      />

      <div className={style.filterControls}>
        <IconButton color="secondary" aria-label="Add Filter">
          <RemoveCircleOutlineIcon fontSize="large" />
        </IconButton>

        <IconButton color="primary" aria-label="Remove Filter">
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </div>
    </Card>
  );
}

export default MethodFilter;
