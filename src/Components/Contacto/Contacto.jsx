import React from 'react';
// import { makeStyles, Paper, Typography } from '@material-ui/core';
import emailjs from "@emailjs/browser";
//import Redes from './Redes';
import Style from "./Contacto.module.css";
import Git from "../../Img/redes/github_PNG40.png";
import LI from "../../Img/redes/linkedin.png"
import wapp from "../../Img/redes/5a452601546ddca7e1fcbc87.png"



const Contacto = ({title , dark, id}) => {
  // const Style = useStyle();
  
  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_yon0e5h', 'template_skyclrm',  e.target ,'jeL9FmSXfeaZuDJUJ')
    .then(function(response) {
      alert("Su mensaje fue enviado con exito")
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  return (
      
        <div className={Style.get}>
							<h2>Get in touch</h2>
							<p className={Style.text}>En caso de que sea de tu interés, podes contactarme mediante este formulario. Me gustaría tener la oportunidad de tener una conversación e intercambiar ideas!
								</p>
              <div className={ Style.sectioncontent} id={id}>
             
         
        {/* <Paper className={Style.root} maxWhidth="md">
          <Typography variant='h5'>
        Contactame */}
        {/* <Redes className= {Style.redes}>

</Redes> */}
      <div className={Style.cont}>
      <form className={Style.form} onSubmit={sendEmail}>
        <label htmlFor="name">Name: </label>
        <input type="text" htmlFor="name"  name="user_name" className={Style.input1}></input>
        <br/>

        <label>e-mail: </label>
        <input type="text" name="user_email" id= "email" className= {Style.input2}></input>
        <br/>
      
        <label>Mensaje: </label>
        <input type="text" name="user_message" id= "mensaje"className={Style.input4}></input>
        <br/>

      <button type='submit' className={Style.button}>Enviar</button>
      </form>
      <hr className={Style.pad}/>
      <div className={Style.social}>
        <div>
        <h2>Address</h2>
        <p> Buenos Aires</p>
        <p>Capital Federal</p>
        <p>C.P (1049)</p>
        </div>
        <div>
        <h2>Email</h2>
        <p> mortonromina@gmail.com</p>
        
        </div>
        <div>
        <h2>Phone</h2>
        <p> (+54) 351-6014087</p>
        
        </div>
        <div>
        <h2>Social</h2>
        <ul className={Style.icons}>
											<a href="https://github.com/Romana08"><span class="label">
                        <img src={Git} alt="not found" className={Style.log} width = "30px"/>
                        </span></a>
												<a href="https://wa.me/543516014087" class="icon brands fa-whatsapp">
                        <img src={wapp} alt="not found" className={Style.log} width = "30px"/>
                          <span class="label">
                        
                          </span></a>
												<a href="https://www.linkedin.com/in/romina-morton-delgado/" class="icon brands fa-linkedin-in"><span class="label">
                        <img src={LI} alt="not found" className={Style.log} width = "30px"/>
                          </span></a>
											</ul>
        
        </div>
        </div>
     
        {/* </Typography>
        </Paper> */}
      </div>
      </div>
</div>
    
  )
}

export default Contacto;