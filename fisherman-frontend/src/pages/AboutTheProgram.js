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
              <Box
                textAlign='center'
                fontWeight={250}
                fontSize={40}
                m={1}
              >
                About the program
              </Box>
              <Box textAlign='left' m={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nobis sunt vitae harum, nihil culpa dignissimos
                laborum ipsum quo eius cumque magnam consectetur.
                Illum a autem ad optio sit molestiae itaque.
              </Box>
              <Box textAlign='left' m={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nam ipsa consectetur ad minus tempora, dolorum
                temporibus aliquam a ipsam porro tenetur enim optio
                hic ullam excepturi nesciunt deserunt placeat. Soluta?
              </Box>
              <Box textAlign='left' m={1}>
                Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Ab possimus quibusdam consequuntur ea nobis
                libero ipsa ad dolores accusamus neque harum,
                accusantium praesentium, fugit, placeat nulla dolorem
                doloremque perferendis saepe.
              </Box>
              <Box textAlign='left' m={1}>
                Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sit, rem eaque. Nam veritatis consectetur ipsam
                iure temporibus mollitia, itaque pariatur quod
                nesciunt modi illum aut illo animi cupiditate ducimus
                neque!
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </animated.div>
  );
};

export default AboutTheProgram;
