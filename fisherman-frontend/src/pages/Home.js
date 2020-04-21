import React from "react";

import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import CostumCard from '../components/CostumCard';


function Home() {

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} sm={6}>
        <Link
          component={RouterLink}
          to="/time-table"
          color="inherit"
          underline="none"
        >
          <CostumCard
            image={require('../images/fish2.jpg')}
            hover="Community catches"
            title="Community catches"
            description="Check out the catches from the fishing community."
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link
          component={RouterLink}
          to="/notes"
          color="inherit"
          underline="none"
        >
          <CostumCard
            image={require('../images/fish.jpg')}
            hover="My own catches"
            title="My own catches"
            description="Check out your own catches in one place"
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link
          component={RouterLink}
          to="/about-the-program"
          color="inherit"
          underline="none"
        >
          <CostumCard
            image={require('../images/code.jpg')}
            hover="About the program"
            title="About the program"
            description="Learn more about the program."
          />
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Link
          component={RouterLink}
          to="/about-the-author"
          color="inherit"
          underline="none"
        >
          <CostumCard
            image={require('../images/myself.jpg')}
            hover="About the author"
            title="About the author"
            description="Learn more about the author."
          />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
