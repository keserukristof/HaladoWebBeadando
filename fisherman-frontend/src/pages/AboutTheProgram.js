import React from 'react';

import { Grid } from '@material-ui/core';
import { useSpring, animated } from 'react-spring';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

import CostumCard from '../components/CostumCard';

const AboutTheProgram = () => {
  const animation = useSpring({
    from: { marginLeft: -1000 },
    to: { marginLeft: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={animation}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <Link
            href='https://github.com/keserukristof/HaladoWebBeadando'
            color='inherit'
            underline='none'
          >
            <CostumCard
              image={require('../images/github.png')}
              hover='Github'
              title='Github'
              description='Check out the github repo of my webpage.'
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container spacing={5}>
            <Grid item xs>
              <Box textAlign='center' fontWeight={250} fontSize={40} m={1}>
                About the program
              </Box>
              <Box textAlign='left' m={1}>
                This program is made for the International Fishing Association. It's a site
                where the sportsmen can log and document their catches.
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default AboutTheProgram;
