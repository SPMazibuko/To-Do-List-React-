import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, 
  Paper,
  Typography,
TextField,
Button,
}from '@material-ui/core';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "8888888888888888888888888",
  authDomain: "88888888888888888888888888888",
  databaseURL: "8888888888888888888888888888888888",
  projectId: "8888888888888888888888888",
  storageBucket: "888888888888888888888888888888",
  messagingSenderId: "888888888888888888888888888888",
  appId: "8888888888888888888888888888888888888888",
  measurementId: "88888888888888888888888888888888888888"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles((theme) => ({
  
  paperSyle: {
    padding: theme.spacing(2),
    backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/218928331_6101479296591986_1474258448850844212_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFEOvTLaX7BLPghEYrUysJdAK9IkqXyckAAr0iSpfJyQFFQjRsgu2Xu5Y19ViDrc7BUrDf6yP6cCUMkPeUWAF6u&_nc_ohc=CwhSAxKVnsMAX-_pyfO&_nc_ht=scontent.fjnb11-1.fna&oh=0d26aba78b31de2b13d4e44de6c516b2&oe=60FC3CB1" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
  },

}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <Grid id="main">
        <Paper elevation={20} className={classes.paperSyle} id="mainPaper" >
          <Grid id="formSetting" style={{ padding: '20px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden',
  borderRadius: '20px', textAlign: 'center', }}>
            <h2 style={{overflow: 'visible', whiteSpace: 'pre',
fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo, serif', margin:0, }}>
  Create An Account
  </h2>
    <Typography variant='caption'>
      Please fill up all fields in this form
    </Typography>
    
    <Grid align='center'>
    <form>
      <TextField fullwidth label="Enter Your Name:" />
      <TextField fullwidth label="Email Address" />
      <TextField fullwidth label="Create Password" />
      <TextField fullwidth label="Confirm Password" />

      <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>}
      >
         Send
      </Button>
    
    </form>
    </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Router>
  );
}