import React from 'react';
import style from "../Present/Portada.module.css";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
//import CastForEducationIcon from '@material-ui/icons/CastForEducation';//agregar con mis estudios
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import WorkIcon from '@material-ui/icons/Work';
import AssistantIcon from '@material-ui/icons/Assistant';

const Portada = () => {
  return (
    <div className={style.div}>
    <div className={style.box}>
    <div className={style.img}>
   <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_u4jjb9bd.json"  background="transparent" speed="1"  loop  autoplay></lottie-player>
     
    </div>
  <div className={style.press}>Hola, mi nombre es Romina Morton y soy <p className={style.title}>Fullstack Developer.</p>   

   <div className={style.ref}>
    <a href= '#Sobre Mi'>
    <AssignmentIndIcon className={style.icons} width = '500px'></AssignmentIndIcon></a>
    <a href= '#skills'><WorkIcon className={style.icons} ></WorkIcon></a>
    <a href= '#work'><AssistantIcon className={style.icons}></AssistantIcon></a>
    <a href='#contacto'><PermPhoneMsgIcon className={style.icons}></PermPhoneMsgIcon></a>
    
  </div> 
 </div>
</div>
 
    </div>
  )
}

export default Portada