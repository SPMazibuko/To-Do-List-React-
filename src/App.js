import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, 
  Paper,
  Typography,
TextField,
Button,
 Checkbox,
 List,
}from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Divider from '@material-ui/core/Divider';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useHistory} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy98scBj_05f6VoJqcXczg5sqZcG3zWXc",
  authDomain: "to-do-list-59982.firebaseapp.com",
  projectId: "to-do-list-59982",
  storageBucket: "to-do-list-59982.appspot.com",
  messagingSenderId: "92859883872",
  appId: "1:92859883872:web:9971d726341298e6ee3e05",
  measurementId: "G-WFSWHRGCCJ"
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

  todoBackground:{
    backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")",
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',

},

}));


const routes = [
  {
    path: "/todo",
    exact: true,
    sidebar: () => <div>
            <List>
            <Link href='#'>
            <AddRoundedIcon fontSize="small"/>
              <ListItemText primary="New List" />
            </Link>
      </List>
    </div>,
    main: () => (
    <div style={{backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")", display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden', height:630}}>
    <h2>My Day</h2>
    </div>
    )
  },
  {
    path: "/Important",
    sidebar: () => <div>
            <List>
            <Link href='#'>
            <AddRoundedIcon fontSize="small"/>
              <ListItemText primary="New List" />
            </Link>
      </List>
    </div>,
    main: () => (
      <div style={{backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")", display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden', height:630}}>
      <h2>Important</h2>
      </div>
      )
  },
  {
    path: "/planned",
    sidebar: () => <div>      
      <List>
      <Link href='#'>
    <AddRoundedIcon fontSize="small"/>
      <ListItemText primary="New List" />
    </Link>
</List>
</div>,
    main: () => (
      <div style={{backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")", display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'space-around',
      overflow: 'hidden', height:630}}>
      <h2>Planned</h2>
      </div>
      )
  },
  {
  path: "/assigned",
  sidebar: () => <div>      
    <List>
    <Link href='#'>
  <AddRoundedIcon fontSize="small"/>
    <ListItemText primary="New List" />
  </Link>
</List>
</div>,
  main: () => (
    <div style={{backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")", display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden', height:630}}>
    <h2>Assigned To You</h2>
    </div>
    )
},
{
  path: "/task",
  sidebar: () => <div>      
    <List>
    <Link href='#'>
  <AddRoundedIcon fontSize="small"/>
    <ListItemText primary="New List" />
  </Link>
</List>
</div>,
  main: () => (
    <div style={{backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeF-nT6KqkTTZ2yqPpuxQXVQFJX-PQXMEK4Ulf49BcwQrpoxR_4flSbTDvaIYZEHr4lbEfhQSm_4CgcGBrT_Ayh-&_nc_ohc=t_ZtuDGnMtoAX__fq7j&_nc_ht=scontent.fjnb11-1.fna&oh=e42fed7be69a4c8def384a68590102e2&oe=60FDEF25" + ")", display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    overflow: 'hidden', height:630}}>
    <h2>Task</h2>
    </div>
    )
},
];

export default function App() {
  const classes = useStyles();

  let history = useHistory();
  const goToPreviousPath = () => {
      history.goBack()
  }
  return (
    <Router>
        <Switch>
          <Route path="/todo">
            <todo />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.sidebar />}
            />
          ))}
        </Switch>

      <div style={{ flex: 1, padding: "10px" }}>
        <Switch>
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </div>
  </Router>
  );
}

function Signup(){
  const classes = useStyles();
  const [mail, setMail] = useState('')
  const [password,setPassword] = useState('')
  return(
  <Grid id="main" container spacing={0} >
  <Paper elevation={20} className={classes.root} id="mainPaper" >
    <Grid id="formSetting" style={{ padding: '20px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '20px', textAlign: 'center', }} >
    <Grid container spacing={1}>
      <Paper elevation ={0} className={classes.paper} id="left">
       <Grid item xs={10} >

       <Grid align='center'>
          <h2 style={{overflow: 'visible', whiteSpace: 'pre', fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo, serif', margin:0, }}>
          Create An Account
          </h2>

          <Typography variant='caption'>
             Please fill up all fields in this form
          </Typography>

          
            <form>
              <TextField variant="outlined" margin="normal" required fullWidth id="nm" placeholder="Enter Your Name" name="nm" placeholderColor="rgb(170, 170, 170)" padding={44} radius={8} backgroundColor="rgb(245, 245, 245)" label="Name:" />

              <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Enter Email address" name="email" placeholderColor="rgb(170, 170, 170)" padding={44} radius={8} backgroundColor="rgb(245, 245, 245)" label="Email Address:" onChange={event => setMail(event.target.value)}/>

              <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Create Password" type="password" id="password" onChange={event => setPassword(event.target.value)}/>

              <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Confirm Password" type="password" id="password" />

              <FormControlLabel control={<Checkbox name="checkedB" color="primary" fullWidth variant="contained"/>} label="Accept Terms & Conditions" />
 
              <Button type='submit' color="primary" variant="contained" className={classes.button} startIcon={<ExitToAppRoundedIcon />} fullWidth 
              onClick={()=>{  
                firebase.auth().createUserWithEmailAndPassword(mail, password)
            .then((userCredential) => {
      // Signed in 
             var user = userCredential.user;
              console.log(user)
    // ...
        })
         .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           console.log(error.message) });}}>
                SIGN UP
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Already have an account? Sign in"}
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
</Grid>)
  
}

function Login(){
  const classes = useStyles();
  return(
  <Grid id="main" >
  <Paper elevation={20} className={classes.root} id="mainPaper" >
    <Grid id="formSetting" style={{ padding: '20px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '20px', textAlign: 'center', }} >
    <Grid container spacing={1}>
      <Paper elevation ={0} className={classes.paper} id="left">
       <Grid item xs={10} >

       <Grid align='center'>
          <h2 style={{overflow: 'visible', whiteSpace: 'pre', fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo, serif', margin:0, }}>
          SIGN IN
          </h2>

          <Typography variant='caption'>
             
          </Typography>

          
            <form>

              <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Enter Email address" name="email" placeholderColor="rgb(170, 170, 170)" padding={44} radius={8} backgroundColor="rgb(245, 245, 245)" label="Email Address:" />

              <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Enter Password" type="password" id="password" />

              <FormControlLabel control={<Checkbox name="remember" color="primary" fullWidth variant="contained"/>} label="remember me" />
 
              <Button type='submit' color="primary" variant="contained" className={classes.button} startIcon={<ExitToAppRoundedIcon />} fullWidth 
              onClick={()=>{  
                firebase.auth().createUserWithEmailAndPassword("kamo@gmail.com", "123456")
            .then((userCredential) => {
      // Signed in 
             var user = userCredential.user;
              console.log(user)
    // ...
        })
         .catch((error) => {
           var errorCode = error.code;
           var errorMessage = error.message;
           console.log(error.message) });}}>
                SIGN UP
              </Button>
            </form>
            <Grid container>
                        <Grid item xs>
                          <Link to="#" variant="body2">
                             {"Forgot password?"}
                          </Link>
                        </Grid>
                      <Grid item>
                        <Link to="/signup" variant="body2">
                         {"Don't have an account? Sign Up"}
                        </Link>
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
</Grid>)
}

function Todo(){
<div style={{ display: "flex" }}>
      <div
        style={{
          paddingTop: "4px",
          width: "20%",
          background: "#f0f0f0"
        }}
      >
        
          <Link onClick={() => {goToPreviousPath}}><ArrowBackRoundedIcon  fontSize="small"/></Link>

        <TextField variant="outlined" margin="normal" fullWidth id="seach" placeholder="Search" name="Search" placeholderColor="#FFFFFF" padding={44} radius={8} backgroundColor="#FFFFFF" label="Search" />

        <List >
          <ListItem>
            <WbSunnyRoundedIcon fontSize="small"/>
            <Link to="/"> <ListItemText primary="MyDay"/></Link>
          </ListItem>
         
          <ListItem>
             <StarBorderRoundedIcon fontSize="small"/>  
            <Link to="/important"> <ListItemText primary="Important"/></Link>
            </ListItem>

          <ListItem>
            <EventRoundedIcon  fontSize="small"/>
            <Link to="/planned">
              <ListItemText primary="Planned" />
            </Link>
            </ListItem>
        </List>
      <ListItem>
            <PermIdentityIcon fontSize="small"/>
            <Link to="/assigned">
              <ListItemText primary="Assigned To You" />
            </Link>
      </ListItem>
      <ListItem>
            <AssignmentTurnedInRoundedIcon fontSize="small"/>
            <Link to="/task">
              <ListItemText primary="Task" />
            </Link>
      </ListItem>
      <Divider />
      
    </div>
       
    </div>
}

