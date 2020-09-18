import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import style from './MethodFilter.module.scss';

function MethodFilter() {
  return (
    <Card className={style.main}>
      <Typography variant="h4" component="h4" gutterBottom>
        Filter by Method
      </Typography>
    </Card>
  );
}

export default MethodFilter;
