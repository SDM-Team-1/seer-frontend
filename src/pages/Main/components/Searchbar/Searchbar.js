import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import style from './Searchbar.module.scss';
// import style from './Searchbar.module.scss';

function Searchbar() {
  return (
    <Card className={style.main}>
      <Typography variant="h4" component="h4" gutterBottom>
        Search Bar
      </Typography>
    </Card>
  );
}

export default Searchbar;
