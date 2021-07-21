import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
    textAlign: 'left',
    color: '#000000',
    paddingLeft: 30,
  },

}));

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <Grid>
        <Paper elevation={20} className={classes.paperSyle}>
          <h2>Create An Acount</h2>
        </Paper>
      </Grid>
    </Router>
  );
}