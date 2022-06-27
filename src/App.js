import NavBar from './Components/NavBar/NavBar';
import "./App.css"; 
import { SobreMi } from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contacto from './Components/Contacto/Contacto';
import style from"./App.css";



function App(){

  return (
    <div className= "cont">
     <NavBar></NavBar>
     <SobreMi title= "Sobre mi" id= "Sobre Mi"></SobreMi>
     <Skills title= "Skills" id= "skills"></Skills>
     <MyWork title= "My work"  id= "work"></MyWork>
     <Contacto title= "Contacto" id= "contacto"></Contacto>
    <div>
      Portafolio Web - Idea Original - Romina Morton
      </div>
    </div>


);
}


export default App;

