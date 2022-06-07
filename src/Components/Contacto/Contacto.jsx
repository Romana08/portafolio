import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import emailjs from "@emailjs/browser";
import Redes from './Redes';


const Contacto = ({title , dark, id}) => {
  const classes = useStyle();

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
      
          <div className={`${classes.section} ${dark && classes.sectiondark}`}>
    <Typography variant='h3'>
          {title}
        </Typography>  
           <div className={ classes.sectioncontent} id={id}>
             
         
        <Paper className={classes.root} maxWhidth="md">
          <Typography variant='h5'>
            Contactame
        <Redes className= {classes.redes}>

        </Redes>
      
      <form className={classes.form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className={classes.input}></input>
        <br/>

        <label>e-mail</label>
        <input type="text" name="user_email" className= {classes.input}></input>
        <br/>
        <label>Asunto</label>
        <input type="text" name="user_name" className={classes.inputA}></input>
        <br/>

        <label>Mensaje</label>
        <input type="text" name="user_message" className={classes.inputM}></input>
        <br/>

      <button type='submit' className={classes.boton}>Enviar</button>
      </form>
        </Typography>
        </Paper>
      </div>
      </div>
    
  )
}
const useStyle = makeStyles ((theme) => ({

  section:{
    minHeight: "100vh",
    display:"flex",
     flexDirection:"column",
  //  justifyContent:"flex-start",
    alignContent:"center",
  },
  root:{
    margin: "30px",
    alignItems:"center",
    flexDirection:"row-reverse",
    backgroundColor: "#FFC4DD",
    color: "#040303",
    fontSize: "1.5rem",
    maxWidth: "900px",
    display: "flex",
    marginLeft: "45vh",
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
    textDecoration:"none",
    display:"block",
    color: "#040303",
    [theme.breakpoints.down("sm")]:{
      display: "block",
      alignContent:"center",
     margin: "2vh",
     marginLeft:"3vh",
     alignItems: "center",
     maxWidth: "2vh",
    },
  },
  sectiondark:{
    background : "#7F8487",
    color : "#fff",
  },
  sectioncontent:{
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    margin: "25px",
    maxWidth: "80vh",
   
  },
 
  boton:{
    position:"flex",
    zIndex: 999,
    marginLeft: "75px",
    bottom:"2 rem",
    borderRadius:"3px",
    [theme.breakpoints.down("sm")]:{
        bottom: 10,
        
    },
    backgroundColor:"#570A57",
    border: "#570A57",
    height:"5vh",
    width:"10vh",
    "& a":{
      color: "#7F8487",
      textDecoration: "none",
      fontWeight: 900,
    }
  },
  input:{
    padding: "5px",
    margin: "8px",
    alignContent:"justify",
    height:"5vh",
    width:"41vh",
    borderRadius: "5px"
   
  },
  inputA:{
    padding: "3px",
    margin: "8px",
    alignContent:"center",
    height:"5vh",
    width:"40vh",
    borderRadius: "5px"

  },
  inputM:{
    padding: "3px",
    margin: "8px",
    alignContent:"justify",
    height:"15vh",
    width:"52vh",
    borderRadius: "5px"
  },
}))

export default Contacto;