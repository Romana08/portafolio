
import {makeStyles } from '@material-ui/core';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contacto from './Components/Contacto/Contacto';
import MyWork from './Components/MyWork/MyWork';


function App(){
const classes = useStyle(); 

  return (
   <div className={classes.root}>
     {/* <h1>Atr</h1> */}
     <NavBar/>
     <About  title= "About Me" dark= {true} id= "about"/>
     <Skills title= "My coding" dark= {false} id= "skills"/>
     <MyWork title= "My work" dark= {true} id= "work"/>
     <Contacto title= "Get in touch" dark= {false} id= "contacto"/>
   </div>
  );
 }

const useStyle = makeStyles ((theme) => ({
  root:{

  }
}))

export default App;
