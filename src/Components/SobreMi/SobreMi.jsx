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
         Hola, soy Romina Morton, Fullstack Developer
         
         Me didico a la Programación, si bien soy Licenciada en Comunicación con Orientación en Audiovisual; tengo un Perfil más bien técnico y es por esa misma razón, que en el año 2019 comencé a indagar en el mundo del desarrollo, el diseño y la tecnologia. Si te interesa, te invito a que pases por mi perfil GitHub o que conectemos en LinkedIn.
    
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
