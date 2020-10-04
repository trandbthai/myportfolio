import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {BrowserRouter as Router,Link, Switch, Route} from 'react-router-dom';
import {Button, Card, CardMedia} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import darkbg from '../img/bgdark.jpeg';

const useStyles = makeStyles({
  media: {
    height: 250,
    width: 350,
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 30,
  },
  button: {
    '&:hover': {
      backgroundColor: 'grey',
    },
    color: 'white',
    fontSize: 15,
    textTransform: 'none',
    borderColor: '#00FF00',
    borderWidth: 5,
    borderRadius: 50,
  },
});

const ProjectItem = props => {
  const classes = useStyles();
  const {originalBackground, logo, intro, project} = props;
  const [background, setBackground] = useState(originalBackground);
  const [label, setLabel] = useState(logo);
  const [isShown, setIsShown] = useState(false);

  let history = useHistory();

  return (
    <Card class={{boxShadow: 'none'}}>
      <CardMedia
        class={classes.media}
        image={background}
        onMouseEnter={() => {
          setBackground(darkbg);
          setLabel(null);
          setIsShown(true);
        }}
        onMouseLeave={() => {
          setBackground(originalBackground);
          setLabel(logo);
          setIsShown(false);
        }}
      >
        <img alt={label} src={label} />
        {isShown && (
          <>
            <div>
              <p className={classes.content}>{intro}</p>
              <div className="flex justify-center items-center">
                <Button
                  variant="outlined"
                  size="large"
                  className={classes.button}
                  onClick={() => {window.open(`http://localhost:5000${project}`, "_blank")}}
                >
                  Take A Look
                </Button>
              </div>
            </div>
          </>
        )}
      </CardMedia>
    </Card>
  );
};

export default ProjectItem;
