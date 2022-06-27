import React from 'react';
import Style from "./SobreMi.module.css";
import foto from "../../Img/Logo/foto.jpeg";
import pdf from "../../Img/cv.pdf";
import wapp from '../../Img/redes/5a452601546ddca7e1fcbc87.png'



export const SobreMi = ({id}) => {
  return (
    <div className={Style.conteiner} id={id}>
        <div className={Style.card}>
         <img className={Style.img} src={foto} alt='not found'/>     
         <div className={Style.parraf1}>
         <div className={Style.parraf2}>
         Hola, soy Romina Morton, Fullstack Developer.
         
         Me didico a la Programación y cuento con excelentes habilidades de comunicación, ya que en el 2019 me recibí de Licenciada en Comunicación. 
         Mi Perfil, en esa área es técnico y fue por esa razón, que en el año que me recibí comencé a indagar en el mundo del desarrollo, el diseño y la tecnologia. 
         Si te interesa, te invito a que pases por mi perfil GitHub o que conectemos en LinkedIn.
    
         <div>
           <button className={Style.button}>
           <a href = { pdf } dowload>
                Download CV
                </a>
           </button>
         <div className={Style.redes} src = {wapp} alt='not found'>

         </div>
</div>
         </div>
        </div>
    </div>
         </div>
  )
}
