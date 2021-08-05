import React, { useState, useEffect } from "react";
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

//Icons Imports
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import AssignmentTurnedInRoundedIcon from '@material-ui/icons/AssignmentTurnedInRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import AttachmentRoundedIcon from '@material-ui/icons/AttachmentRounded';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
//Forms and Cards Imports
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
//Routes and switch Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Redux Imports

//Firebase imports
import {useHistory} from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"
import * as firebase from 'firebase';

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDy98scBj_05f6VoJqcXczg5sqZcG3zWXc",
  authDomain: "to-do-list-59982.firebaseapp.com",
  projectId: "to-do-list-59982",
  storageBucket: "to-do-list-59982.appspot.com",
  messagingSenderId: "92859883872",
  appId: "1:92859883872:web:9971d726341298e6ee3e05",
  measurementId: "G-WFSWHRGCCJ"
};

//Firebase initialization
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


//Styles of the application
const useStyles = makeStyles((theme) => ({
      root:{
        display: 'flex',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
  /*paperSyle: {
    backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/218928331_6101479296591986_1474258448850844212_n.jpg?_nc_cat=108&_nc_rgb565=1&ccb=1-3&_nc_sid=730e14&_nc_eui2=AeFEOvTLaX7BLPghEYrUysJdAK9IkqXyckAAr0iSpfJyQFFQjRsgu2Xu5Y19ViDrc7BUrDf6yP6cCUMkPeUWAF6u&_nc_ohc=CwhSAxKVnsMAX-_pyfO&_nc_ht=scontent.fjnb11-1.fna&oh=0d26aba78b31de2b13d4e44de6c516b2&oe=60FC3CB1" + ")",
    color: '#0000000'
  },*/
  button: {
    margin: theme.spacing(1),
    
  },
  image: {
    backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/218230350_6101479503258632_6092955877124397050_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=zEKmEY_xh1kAX-g2prU&tn=6VvZ5GfI6aYD5Tzn&_nc_ht=scontent.fjnb11-1.fna&oh=f6986bd9697e9260806d95cbeb05f224&oe=612AD072" + ")",
      width: '700px',
      height: '600px',
      overflow: 'visible',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));


//=============================================================Main App Function =================================

export default function App() {

  const [user, setUser] = useState('')

    const authListener = () =>{
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          setUser(user)
        }else{
          setUser("")
        }
      })
    }

     
  useEffect(() => {
    authListener();
    },[])
  
  return (
    <Router>
        <Switch>
          <Route path="/todolist">
              <ToDoList />
              </Route>
              
              <Route exact path="/">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
          
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
      <div style={{ display: "flex" }}>
        <div>
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
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
  </Router>
  );
}


//============================================ Signup Function ==================================

function Signup(){
  const classes = useStyles();

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError, setEmailError]=useState('');
  const [PasswordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  

  const history = useHistory()

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
    }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }

  const handleSignUp = (e) =>{
    clearErrors();
    e.preventDefault()
    if (password !== confirmPassword || password === " ")  {
      return setPasswordError('Passwords do not match/password not entered')
      }
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
   .catch((err)=>{
      switch(err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
      setEmailError(err.message);
      break;
      case"auth/weak-password":
      setPasswordError(err.message);
      break;
      }
    })
  .then(history.push("/todolist"));
}

    const authListener = () =>{
      firebase.auth().onAuthStateChanged(user =>{
        if(user){
          clearInputs()
          setUser(user)
        }else{
          setUser("")
        }
      })
    }
     
  useEffect(() => {
    authListener();
    },[])

  return(
    <Grid id="main" container spacing={0} style={{padding: '10px 20px',  position: 'fixed', }} className={classes. paperSyle}>
      <Paper elevation={20} className={classes.root} id="mainPaper" >
       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square style={{ padding: '20px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '20px', }}>
        <Grid item xs={11} >
          <Grid align='center'>
           <h2 style={{overflow: 'visible', whiteSpace: 'pre', fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo, serif', margin:0, }}>
            Create An Account
            </h2>
             <Typography variant='caption'>
             Please fill up all fields in this form
              </Typography>

            <form>
              <TextField variant="outlined" margin="normal" required fullWidth id="nm" placeholder="Enter Your Name" name="name" padding={44} radius={8} label="Name:" />

              <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Enter Email address" name="email" padding={44} radius={8}  label="Email Address:" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p className="errorMsg">{emailError}</p>

              <TextField variant="outlined" margin="normal" required fullWidth name="password" type="password" placeholder="Create Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="errorMsg">{PasswordError}</p>

              <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Confirm Password" type="password" id="password" onChange={(e) => setConfirmPassword(e.target.value)} />

              <FormControlLabel control={<Checkbox name="checkedB" color="primary" fullWidth variant="contained"/>} label="Accept Terms & Conditions" />
 
              <Button type='submit' color="primary" variant="contained" className={classes.button} startIcon={<ExitToAppRoundedIcon />} fullWidth 
              onClick={handleSignUp}>
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
     </Grid>
     <Grid item xs={false} sm={4} md={7} className={classes.image} />
</Paper>
</Grid>)
  
}
//================================================== Login Function =====================================
function Login(){
  const classes = useStyles();
  const history = useHistory()

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [emailError, setEmailError]=useState('');
  const [PasswordError, setPasswordError] = useState('');

  const clearInputs=()=>{
    setEmail('');
    setPassword('');
    }

  const clearErrors=()=>{
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = (e) =>{
    clearErrors();
    e.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        history.push("/todolist")
      })
      .catch((err)=>{
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case"auth/wrong-password":
          setPasswordError(err.message);
          break;
        }
      })
      
    }

    const authListener = () =>{
      firebase.auth().onAuthStateChanged(user =>{
        if(!user){
          clearInputs()
          setUser("")
        }else{
          setUser(user)
        }
      })
    }
     
  useEffect(() => {
    authListener();
    },[])

  return(
    <Grid id="main" container spacing={0} style={{padding: '10px 20px',  position: 'fixed', }} className={classes. paperSyle}>
      <Paper elevation={20} className={classes.root} id="mainPaper" >
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square style={{ padding: '90px 20px', width: 587, backgroundColor: '#ffffff', overflow: 'hidden', borderRadius: '20px', }}>
         <Grid item xs={11} >
          <Grid align='center' style={{paddingLeft:'20px'}}>
            <h2 style={{overflow: 'visible', whiteSpace: 'pre', fontSize: '46px', letterSpacing: '-2px', color: '#333', lineHeight: '1.1', fontWeight: 700, fontStyle: 'normal', fontFamily: 'Arvo,   serif', margin:0, }}>
              Welcome Back
            </h2>
            <form>

              <TextField variant="outlined" margin="normal" required fullWidth id="email" placeholder="Enter Email address" name="email" padding={44} radius={8}  label="Email Address:" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p className="errorMsg">{emailError}</p>

              <TextField variant="outlined" margin="normal" required fullWidth name="password"  placeholder="Enter Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <p className="errorMsg">{PasswordError}</p>

              <FormControlLabel control={<Checkbox name="remember" color="primary" fullWidth variant="contained"/>} label="remember me" />
  
              <Button type='submit' color="primary" variant="contained" className={classes.button} startIcon={<ExitToAppRoundedIcon />} fullWidth 
              onClick={handleLogin}>
                SIGN IN
              </Button>
            </form>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
     </Grid>
     <Grid item xs={false} sm={4} md={7} className={classes.image} />
</Paper>
</Grid>)
}
//=================================================== TodoList Function =================================

// Define an initial state value for the app
const initialState = {
  text: "",
  isDone: false
}



function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div style={{  
      alignItems: 'center',
      display: 'flex',
      fontSiize: '18px',
      justifyContent: 'spaceBetween', }}>

      <span style={{ textDecoration: todo.isDone ? "line-through" : "", padding: '10px', flexGrow: '3'}}>{todo.text}</span>
      <div>
<DoneRoundedIcon style={{fill: "green"}} onClick={() => markTodo(index)}/>{'  '}
       <DeleteForeverRoundedIcon style={{fill: "red"}} onClick={() => removeTodo(index)} /> 
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className={classes.root}>
      <Form onSubmit={handleSubmit} 
        style={{
        width: '659px',
        display: 'flex', 
        flexDirection: 'culumn',
        padding: '10px 38px 39px 38px',
        borderRadius: '10px', 
        marginTop:"500px", 
        marginLeft:'22%',
        zIndex: '2',
        position: 'fixed'
        }}> 

      <Form.Group>
      <Form.Control type="text" className="" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />

        </Form.Group>
        <Button type="submit" className="add-btn" variant="contained" startIcon={<AddCircleOutlineRoundedIcon />}>
        Add
        </Button>
        </Form>
     </div>
  );
}

function MyDay(){
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  
  return (
    <div className="" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px', }}
      >
      <div className="">

        <div>
          {todos.map((todo, index) => (
            <Card>
              <CardContent>
                <Todo key={index} index={index}  todo={todo}  markTodo={markTodo} removeTodo={removeTodo} />
                </CardContent>
            </Card>
          ))}
        </div>
        <FormTodo addTodo={addTodo} />
      </div>
      
    </div>
  );
}

function Important(){
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px', }}
      >
      <div className="">

        <div>
          {todos.map((todo, index) => (
            <Card>
              <CardContent>
                <Todo key={index} index={index}  todo={todo}  markTodo={markTodo} removeTodo={removeTodo} />
                </CardContent>
            </Card>
          ))}
        </div>
        <FormTodo addTodo={addTodo} />
      </div>
      
    </div>
  );}

function Planned(){
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px', }}
      >
      <div className="">

        <div>
          {todos.map((todo, index) => (
            <Card>
              <CardContent>
                <Todo key={index} index={index}  todo={todo}  markTodo={markTodo} removeTodo={removeTodo} />
                </CardContent>
            </Card>
          ))}
        </div>
        <FormTodo addTodo={addTodo} />
      </div>
      
    </div>
  );
}

function Assigned(){
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px', }}
      >
      <div className="">

        <div>
          {todos.map((todo, index) => (
            <Card>
              <CardContent>
                <Todo key={index} index={index}  todo={todo}  markTodo={markTodo} removeTodo={removeTodo} />
                </CardContent>
            </Card>
          ))}
        </div>
        <FormTodo addTodo={addTodo} />
      </div>
      
    </div>
  );
}

function Task(){
  const [todos, setTodos] = React.useState([
    {
      text: "",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="" style={{
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '15px', }}
      >
      <div className="">
        <div>
          {todos.map((todo, index) => (
            <Card>
              <CardContent>
                <Todo key={index} index={index}  todo={todo}  markTodo={markTodo} removeTodo={removeTodo} />
                </CardContent>
            </Card>
          ))}
        </div>
        <FormTodo addTodo={addTodo} />
      </div>
      
    </div>
  );
}

const routes = [
  {
    path: "/myday",
    exact: true,
    sidebar: () => <div>.</div>,
    main: () =>(
      <div>
    <h2>My Day</h2>
      < MyDay />
    
    </div>
    )
  },
  {
    path: "/important",
    sidebar: () => <div>.</div>,
    main: () =>(
      <div> <h2>Important</h2>
    < Important />
    </div>
    )
  },
  {
    path: "/planned",
    sidebar: () => <div>.</div>,
    main: () =>(
      <div> <h2>Planned</h2>
    < Planned />
    </div>)
  },
  {
    path: "/assigned",
    sidebar: () => <div>.</div>,
    main: () => (
      <div> <h2>Assigned To You</h2>
      < Assigned />
      </div>)
  },
  {
    path: "/task",
    sidebar: () => <div>.</div>,
    main: () =>(
      <div>  <h2>Task</h2>
      < Task />
      </div>)
  }
];

function ToDoList() {
  const [Datalist,setData]=useState([{name:'Living'}])
  const [value, setValue] = React.useState("");

  const text = {
    color: "black",
    fontWeight: 700, 
    fontStyle: 'normal', 
    fontFamily: 'Arvo, serif',
};
const text2 = {
  color: "#19181c", 
  fontStyle: 'normal', 
  fontFamily: 'Arvo, serif',
};
  return (
    <Router>

      <Grid style={{  display: "flex", width: '1356px', height: '650px', boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)', overflow: 'hidden', backgroundImage: "url(" + "https://scontent.fjnb11-1.fna.fbcdn.net/v/t1.6435-9/220410270_6101483326591583_5306378977487393636_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=730e14&_nc_ohc=Mzk5NExrAZEAX_mxea_&_nc_ht=scontent.fjnb11-1.fna&oh=c895bcb3c89cacaa6ae2ea62f0e2bacf&oe=612970A5" + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat',backgroundPosition: 'center', borderRadius: '20px' }}>
        <Grid
          style={{ width: '298px', height: '650px', backgroundColor: 'rgba(164, 183, 182, 0.69)', overflow: 'hidden', borderRadius: '10px 0px 10px 0px'
          }} >
          <TextField variant="outlined" margin="normal" fullWidth id="seach" placeholder="Search" name="Search" padding={44} radius={30} label="Search" />

          <List  style={{ listStyleType: "none", padding: 0,color: 'black' }}>
          <ListItem > 
              <WbSunnyRoundedIcon fontSize="small" style={{fill: "yellow"}}/>
              <Link to="/myday"> <ListItemText primaryTypographyProps={{ style: text }} primary="My Day"/></Link>
          </ListItem>
       
          <ListItem>
            <StarBorderRoundedIcon fontSize="small" style={{fill: "gold"}}/>  
            <Link to="/important"> <ListItemText primaryTypographyProps={{ style: text }} primary="Important"/></Link>
          </ListItem>
         
          <ListItem>
            <EventRoundedIcon  fontSize="small" style={{fill: "green"}}/>
            <Link to="/planned"> <ListItemText primaryTypographyProps={{ style: text }} primary="Planned" /> </Link>
          </ListItem>
         
          <ListItem>
            <PermIdentityIcon fontSize="small" style={{fill: "#394d44"}}/>
            <Link to="/assigned">
              <ListItemText primaryTypographyProps={{ style: text }} primary="Assigned To You" /></Link>
          </ListItem>

         <ListItem>
            <AssignmentTurnedInRoundedIcon fontSize="small" style={{fill: "#5f6c82"}}/>
            <Link to="/task"><ListItemText primaryTypographyProps={{ style: text }} primary="Task" /></Link>
          </ListItem>
          </List>
          <hr/>

{/*This Button adds data to the firestore database*/}

      <TextField variant="outlined" margin="normal"id="todoField" name="tolist" padding={5} radius={20}  value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
     
        <Button type="submit" className="add-btn" variant="contained" color="primary" startIcon={<AddCircleOutlineRoundedIcon />}
         onClick={()=>{ 
          console.log("writing")
          firebase.firestore().collection('Lists').add({ListName:value}).then(response=>{
          console.log(response)})
        }} style={{}}>
        Add
        </Button>
{' '}
{/*<button onClick >Write</button>*/}
{/*Ends here*/}

{/*This button Reads data from firestore*/} 
<Button type="submit" className="add-btn" variant="contained" color="secondary" startIcon={< VisibilityTwoToneIcon />} 
onClick={()=>{ 
    let val=[]
    console.log("getting")
    console.log(Datalist)
    firebase.firestore().collection('Lists').get().then(response=>{
    console.log(response)
    response.forEach(data=>{
         
    
      
      val.push({...{id:data.id},...data.data()})
       console.log(data.id);
     
       //setData(...Datalist,val)
  
       
  
     })
  setData(val)
     //console.log("list = ",val)
     console.log("list = ",Datalist)
  
  })
  }}>Read</Button>
{/*Ends Here*/}

          {/*This displays the data from the firestore*/}

          <div className = "App" >
  <ul>
  {Datalist.map(person => {
    return (
      <li key={person.id} onClick={(data)=>{
        console.log("click",person)

      }}>
        {person.ListName}
      </li>
    )
  })}
</ul>
     </div>

{/*Ends here*/}

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
        </Grid>

        <Grid
          style={{ width: '750px', height: '650px', overflow: 'auto', borderRadius: '15px' }} >
          <Switch>
            {routes.map((route, index) => (
              <Route key={index}  path={route.path} exact={route.exact} children={<route.main />} />
            ))}
          </Switch>
        </Grid>
        <div
        style={{ width: '364px', height: '650px', backgroundColor: 'rgba(164, 183, 182, 0.69)', overflow: 'visible', borderRadius: '0px 10px 0px 10px', padding: '10px'
        }}>
          <FormControlLabel value="" control={<Radio />} label="Write about time blocking" />
          <List  style={{ listStyleType: "none", padding: 0, color: 'black' }}>
          <ListItem>
              <AddRoundedIcon fontSize="small" />
              <Link to="#"> <ListItemText primaryTypographyProps={{ style: text2 }} primary="Add Step"/></Link>
          </ListItem>
          <hr/>
          <ListItem>
            <WbSunnyRoundedIcon fontSize="small" style={{fill: "yellow"}}/>  
            <Link to="#"> <ListItemText primaryTypographyProps={{ style: text2 }} primary="Add To My Day"/></Link>
          </ListItem>
          <hr/>
          <ListItem>
            <NotificationsActiveRoundedIcon  fontSize="small" style={{fill: "gold"}} />
            <Link to="#"> <ListItemText primaryTypographyProps={{ style: text2 }} primary="Remind Me" /> </Link>
          </ListItem>
          <hr/>
          <ListItem>
            <EventRoundedIcon fontSize="small" style={{fill: "green"}}/>
            <Link to="#">
              <ListItemText primaryTypographyProps={{ style: text2 }} primary="Add Due Date" /></Link>
          </ListItem>
          <hr/>
         <ListItem>
            <RepeatRoundedIcon fontSize="small" style={{fill: "white"}}/>
            <Link to="#"><ListItemText primaryTypographyProps={{ style: text2 }} primary="Repeat" /></Link>
          </ListItem>
          <hr/>
          <ListItem>
            <AttachmentRoundedIcon fontSize="small" style={{fill: "white"}}  />
            <Link to="#"><ListItemText primaryTypographyProps={{ style: text2 }} primary="Add File" /></Link>
          </ListItem>
          <hr/>
          <ListItem>
          <TextareaAutosize aria-label="minimum height" minRows={2} placeholder="Add Note" />
          </ListItem>
          </List>

          <Link to="/login"><ArrowForwardIosTwoToneIcon style={{color: '', marginBottom: '70%',marginRight: '0px', marginLeft: '10px'}}/></Link>
          <Link to="#"><DeleteForeverRoundedIcon  style={{color: 'red', marginBottom: '70%',marginRight: '23px', marginLeft: '14%'}}/></Link>

        </div>
      </Grid>
    </Router>
  );
}

