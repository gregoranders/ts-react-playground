import React, { FunctionComponent, memo, useState } from 'react';

import { Button, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    padding: '20px',
  },
  button: {
    width: '100%',
  },
});

export const MaterialUIPage: FunctionComponent = () => {
  const [active, setActive] = useState(true);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Button variant="contained" color="primary" onClick={() => setActive(!active)} className={classes.button}>
        {active ? 'Hide' : 'Show'}
      </Button>
      {active && (
        <Typography variant="h1" component="h2">
          {MaterialUIPage.displayName}
        </Typography>
      )}
    </Paper>
  );
};

MaterialUIPage.displayName = 'MaterialUIPage';

export default memo(MaterialUIPage);
