import {makeStyles } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar';
import Home from "./Components/Home/Home";


function App(){
const classes = useStyle(); 

  return (
   <div className={classes.root}>
     {/* <h1>Atr</h1> */}
     <NavBar/>
     <Home/>
     {/* <About  title= "About Me" dark= {true} id= "about" src = {fondo}/> 
     /*<Skills title= "My coding" dark= {false} id= "skills"/>
     <MyWork title= "My work" dark= {true} id= "work"/>
     <Contacto title= "Get in touch" dark= {false} id= "contacto"/>*/}
   </div>
  );
 }

const useStyle = makeStyles ((theme) => ({
  root:{

  }
}))

export default App;

