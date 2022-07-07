import NavBar from './Components/NavBar/NavBar';
import "./App.css"; 
import { SobreMi } from './Components/SobreMi/SobreMi';
import Skills from './Components/Skills/Skills';
import MyWork from './Components/MyWork/MyWork';
import Contacto from './Components/Contacto/Contacto';
import Portada from './Components/Home/Present/Portada';



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
     <MyWork title= "My work"  id= "work"></MyWork>
     <Contacto title= "Contacto" id= "contacto"></Contacto>
     
    <div>
      Portafolio Web - Idea Original - Romina Morton
      </div>
    </div>


);
}


export default App;

