import React, { useState } from 'react';
import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core';
import emailjs from "@emailjs/browser";

const Contacto = ({title , dark, id}) => {
  const classes = useStyle();
  const [value, setValue]= useState("Hola!");

  const handlerChange = (e)=>{
    setValue(e.target.value)
  }

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_yon0e5h', 'template_skyclrm',  e.target ,'jeL9FmSXfeaZuDJUJ')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }
  return (
    <div >
      <h1>Contact Us</h1>
      <form className='form.email' onSubmit={sendEmail}>
        <label>name</label>
        <input type="text" name="user_name"></input>
        <hr />

        <label>e-mail</label>
        <input type="text" name="user_email"></input>
        <hr />

        <label>Mensaje</label>
        <input type="text" name="user_message"></input>
        <hr />
      <button>enviar</button>
      </form>
    </div>
    // <div className={`${classes.section} ${dark && classes.sectiondark}`}>
    //     <Typography variant='h3'>
    //       {title}
    //     </Typography>   
    //        <div className={ classes.sectioncontent} id={id}>

    //     <Paper className={classes.root}>
    //       <div className={classes.titleandChoice}>
    //       <Typography variant='h5'>
    //         Contacto
    //     </Typography>
    //     <div className={classes.choice}>
    //       <span>Feed-Back</span>
    //       <Radio
    //       value= "Hola!"
    //       checked={value ==="Hola!"}
    //       color="primary"
    //       onChange={handlerChange}
    //       />
    //        <span>Sos IT- Recruiter</span>
    //       <Radio
    //       value= "Te Gusrtaría Contactar?"
    //       checked={value ==="Te Gusrtaría Contactar?"}
    //       color="secundary"
    //       onChange={handlerChange}
    //       />
    //     </div>
    //       </div>
    //     <form className={classes.form} 
    //     autoComplete="off" alignContent= "center"
    //     onSubmit={sendEmail}
    //     >
    //       <TextField label= "Ingrese su Nombre"
    //       name= "user_name"
    //       /> 
                
    //       <TextField label= "Ingrese su e-mail"
    //       name= "user_email"
    //       />
    //       {
    //         value === "Te Gusrtaría Contactar?" ? (
    //           <>
    //           <TextField label= "Nombre de la empresa"/>   
       
    //           </>
    //         ): null
    //       }
    //       <TextField label= "Asunto"/>
    //       <TextField label= "Ingesa tu mensaje"
    //       name ="msg"/>



    //     </form>
    //       <button type='submit' className='button' >
    //         Enviar
    //       </button>

    //     {/* <Button variant = "button"
    //               color="secondary"
    //               className={classes.button}
    //             >   Enviar
    //             </Button> */}
    //     </Paper>

    //   </div>
    // </div>
  )
}
const useStyle = makeStyles ((theme) => ({

  section:{
    minHeight: "100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"flex-start",
    alignContent:"center",
  },
  root:{
    marginTop: theme.spacing(4),
    backgroundColor: "#FFC4DD",
    fontSize: "1.5rem",
    maxWidth: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent:"space-between", 
    padding: theme.spacing(4),
      "& button":{
          backgroundColor: "#2E0249",
          color: "#FFF"
      },
      "& button: hover":{
        backgroundColor: "#F806CC",
        color: "#F806CC"
      }
    

  },
  form:{
    display:"block",

  },
  sectiondark:{
    background : "#7F8487",
    color : "#fff",
  },
  sectioncontent:{
    display: "flex",
    alignContent: "center",
    backgroundColor: "#FF85B3",
    margin: "20px",
    maxWidth: "80vh",
  },
  titleandChoice:{
    // "& h5": {
    //   marginTop: theme.spacing(2)
    // }
  },
}))

export default Contacto;