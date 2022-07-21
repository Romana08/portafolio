import "./App.css"; 
import { SobreMi } from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';
import Contacto from './Components/Contacto/Contacto';
import Portada from './Components/Home/Present/Portada';
import { MisTrabajos } from './Components/MyWork/MisTrabajos';



function App(){

  window.addEventListener('scroll', function (){
   
    let animacion = this.document.getElementById('home');
    let position = animacion.getBoundingClientRect().top;
    console.log(position)
  })

  return (
    <div className= "cont" id = 'home'>
     {/* <NavBar></NavBar> */}
     <Portada></Portada>
       <SobreMi title= "Sobre mi" id= "Sobre Mi"></SobreMi>
     <Skills title= "Skills" id= "skills"></Skills>
     <MisTrabajos title= "My work"  id= "work"></MisTrabajos>
    <Contacto title= "Contacto" id= "contacto"></Contacto>
     {/*  Portafolio Web - Idea Original - Romina Morton
        */}
    <div>
      </div>
    </div>


);
}


export default App;

