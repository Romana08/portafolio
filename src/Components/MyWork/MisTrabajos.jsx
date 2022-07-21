import React from 'react'
import lp from "../../Img/PI/Capturas/lp.png";
import ecomerce from "../../Img/PI/Home.png";
import style from "./MisTrabajos.module.css"


export const MisTrabajos = ({id}) => {
    const mocData = [{
        title:"Pi-Counties",
        src: lp,
        link: "https://www.youtube.com/watch?v=LwG6a3Lrs4Y",
        descripcion: "Esta fue una app desrrollada para un Proyecto Individual."
    },
      {
        title:"E-commerce",
        src: ecomerce,
        link: "https://www.youtube.com/watch?v=LwG6a3Lrs4Y",
        descripcion: "Esta fue una app desrrollada para un Proyecto Individual."
    
      }
    ]
  return (
    <div className={style.box} id = {id}>
        <h3 className={style.titulo}>Mis Trabajos</h3>
     {mocData &&
          mocData.map((item) => (
            <div className = {style.card}>
              {" "}
              <div>
              <img src={item.src} alt="not foun" className={style.img} />
              </div>
              <div className={style.letras}>
              <div className={style.p}>
                <h3>
                    <a href= {item.link}>{item.title}</a></h3>
                </div>
              
              
              <p className={style.p1} > Descripción: </p>
              {item.descripcion}
              
              </div>
            </div>
          ))}
    </div>
  )
}
