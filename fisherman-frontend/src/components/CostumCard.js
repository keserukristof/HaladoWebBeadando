import React from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 50,
  (x - window.innerWidth / 2) / 100,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const useStyles = makeStyles({
  media: {
    height: 240,
  },
  card: {
    maxWidth: 750,
  },
});

const CostumCard = (props) => {
  const classes = useStyles();

  const [cardStyle, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 250, friction: 30 },
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) =>
        set({ xys: calc(x, y) })
      }
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: cardStyle.xys.interpolate(trans) }}
    >
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.hover}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {props.title}
            </Typography>
            <Typography
              variant='body2'
              color='textSecondary'
              component='p'
            >
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </animated.div>
  );
};

CostumCard.propTypes = {
  image: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CostumCard;
