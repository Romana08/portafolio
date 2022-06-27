import React from 'react';
import js from "../../Img/Skills/images.png"
import reactjs from "../../Img/Skills/1631110818-logo-react-js.png";
import node from "../../Img/Skills/1280px-Node.js_logo.svg.png";
import cishart from "../../Img/Skills/C++-Logo.wine.png";
import express from "../../Img/Skills/Expressjs.png";
import materialUI from "../../Img/Skills/material-ui-logo-5BDCB9BA8F-seeklogo.com.png";
import net from "../../Img/Skills/NET_Core_Logo.svg.png";
import pgdmin from "../../Img/Skills/PostgreSQL-Logo.png";
import sequalize from "../../Img/Skills/sequelizejs-ar21.png";
import style from "./Tecnologias.module.css";

const Skills = ({ id }) => {
  const skillsIcons = [
    {
      src: reactjs,
      title: "React.js",
      year: "2021",
      description: "Creación de Componentes funiconales",
      stars: 2,
    },

    {
      src: node,
      title: "Node.js",
      year: "2021",
      description: "Creacion de modelos y tablas relacionales. Creacion de ApiRest",
      stars: 2,
    },
    {
      src: cishart,
      title: "C++",
      year: "2021",
      description: "Realización de Programas básicos. Estudios en curso",
      stars: 1,
    },
    {
      src: express,
      title: "Express",
      year: "2021",
      description: "Realización de Backend con base de datos",
      stars: 2,
    },
    {
      src: js,
      title: "JavaScript",
      year: "2021",
      description: "Utilizado en la elaboración de Backend e interacción de Páginas Web",
      stars: 3,
    },
    {
      src: materialUI,
      title: "MaterialUI",
      year: "2021",
      description: "Diseño interactivo de Sitios Web ",
      stars: 2,
    },
    {
      src: net,
      title: ".Net",
      year: "2021",
      description: "Realización de programas y juegos simples. Aprendizaje en curso",
      stars: 1,
    },
    {
      src: pgdmin,
      title: "Postgres",
      year: "2021",
      description: "Adminitración y vizualización de los datos cargados desde el Back-end y datos integrados por el Front ",
      stars: 2,
    },
    {
      src: sequalize,
      title: "Sequalize",
      year: "2021",
      description: "Manipulación de datos extraídos de API externa ",
      stars: 2,
    },
  ];
  return (
    <div id={id} className={style.conteiner}>
      <div className={style.titulo}>Estas son mis Skills</div>
      <div className={style.gird}>
        {skillsIcons &&
          skillsIcons.map((item) => (
            <div className = {style.card}>
              {" "}
              <div>
              <img src={item.src} alt="not foun" className={style.img} />
              </div>
              <div className={style.letras}>
              <div className={style.p}>
                <h3>{item.title}</h3>
                </div>
              
              
              <p className={style.p1} > Descripción: </p>
              {item.description}
              
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;

