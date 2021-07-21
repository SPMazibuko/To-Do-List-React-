import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, 
  Paper,
  Typography,
TextField,
Button,
 Checkbox,
}from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
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
      root:{

        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
  paperSyle: {
    backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/218928331_6101479296591986_1474258448850844212_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFEOvTLaX7BLPghEYrUysJdAK9IkqXyckAAr0iSpfJyQFFQjRsgu2Xu5Y19ViDrc7BUrDf6yP6cCUMkPeUWAF6u&_nc_ohc=CwhSAxKVnsMAX-_pyfO&_nc_ht=scontent.fjnb11-1.fna&oh=0d26aba78b31de2b13d4e44de6c516b2&oe=60FC3CB1" + ")",
    color: '#0000000'
  },
  button: {
    margin: theme.spacing(1),
  },
  image: {
    backgroundImage: 'url(https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/218230350_6101479503258632_6092955877124397050_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeEFa4M1tk0O-rvUgNMiEp8YWkTzqeHoTLBaRPOp4ehMsPxFGP31U8vyn4FAcMj3gIC-HQHFOzuBcfQ6Amq0a2C5&_nc_ohc=GCvAhaJeFCsAX_LqbjE&tn=6VvZ5GfI6aYD5Tzn&_nc_ht=scontent.fjnb11-1.fna&oh=e6177222a48f69dfcb3c3c2488cf9dfe&oe=60FD54B2)',
      width: '700px',
      height: '600px',
      overflow: 'visible',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    paddingLeft: 30,
  },

}));

export default function App() {
  const classes = useStyles();
  return (
    <Router> 
      <Grid id="main" >
        <Paper elevation={20} className={classes.root} id="mainPaper" >
          <Grid id="formSetting" style={{ padding: '20px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '20px', textAlign: 'center', }} >
          <Grid container spacing={1}>
            <Paper     elevation ={0} className={classes.paper} id="left">
             <Grid item xs={6} >

             <Grid align='center'>
                <h2 style={{overflow: 'visible', whiteSpace: 'pre', fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo, serif', margin:0, }}>
                Create An Account
                </h2>

                <Typography variant='caption'>
                   Please fill up all fields in this form
                </Typography>

                
                  <form>

                    <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Enter Email address" name="email" placeholderColor="rgb(170, 170, 170)" padding={44} radius={8} backgroundColor="rgb(245, 245, 245)" label="Email Address:" />

                    <TextField variant="outlined" margin="normal" required fullWidth id="nm" placeholder="Enter Your Name" name="nm" placeholderColor="rgb(170, 170, 170)" padding={44} radius={8} backgroundColor="rgb(245, 245, 245)" label="Name:" />
     
                    <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Create Password" type="password" id="password" />

                    <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Confirm Password" type="password" id="password" />

                    <FormControlLabel control={<Checkbox name="checkedB" color="primary" fullWidth variant="contained"/>} label="Accept Terms & Conditions" />
       
                    <Button type='submit' color="primary" variant="contained" className={classes.button} startIcon={<ExitToAppRoundedIcon />} fullWidth>
                      SIGN UP
                    </Button>
                  </form>
                  <Grid container>
                    <Grid item xs>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Already have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
           </Grid>
        <Grid item xs={6}>
          <div  className={classes.image}/>
        </Grid>
      </Paper>
    </Grid>
    </Router>
  );
}