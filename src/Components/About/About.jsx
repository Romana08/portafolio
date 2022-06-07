import React from 'react';
import { Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import foto from "../../Img/Logo/foto.jpeg";
import TypeWriteEffect from "react-typewriter-effect";
import  Button from '@material-ui/core/Button';
import pdf from "../../Img/cv.pdf"
import Skills from '../Skills/Skills';


const About = ({title , dark, id , fondo}) => {
  const classes = useStyle();
   
  return (
    <div className={`${classes.section} ${fondo && classes.sectiondark}`}>
    <div className={ classes.selectioncontent} id={id}>
        <Typography variant='h3' aling= "center">
          {title}
        </Typography>
        <Card className={classes.card} >
          <CardMedia image = {foto } className={classes.media} title="picture"/>
          <CardContent className={classes.cardcontenido}>

          <TypeWriteEffect
             className = {classes.name}
              text= "Hola Mi nombre es Romina Morton"
              textStyle = {{ fontSize :"2rem", fontWeight: "700p", color: "#F73D93", aling: "center"}}
              // startDelay={100}
              // cursorColor= "black"
              // typeSpeed ={100}
              />
               <TypeWriteEffect
             className = {classes.slogan}
              text= "Soy FullStack Developer"
              textStyle = {{ fontSize :"1.3rem", fontWeight: "500px",  }}
              // startDelay={2500}
              // cursorColor= "black"
              // typeSpeed ={100}
              />
              <TypeWriteEffect
              variant ="h6"
              textStyle = {{ fontSize :"1rem", fontWeight: "200px"}}
              text= "También, soy Licenciada en Comunicación Social. Disfruto de los desafíos y de aprender constantemente, . "
              color ="secondary"

              />  <Button
                  className={classes.botonpdf}
                  variant="outlined"
                  color= "secondary"
                >    <a href = { pdf } dowload>
                Download CV
                </a>
                </Button>
             
            </CardContent>
            <CardActions>
            
            </CardActions>
            </Card>
            
            
     
      </div>
    </div>
  )
}
const useStyle = makeStyles ((theme) => ({

  section: {
      // minHeight: "100vh",
      height: "90vh",
      backgroundImage: "url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)",
      backgroundSize: "cover",
      backgroundPosition:"center"

  },
  sectiondark:{
    background : "#424547",
    opacity: "60%",
    color : "#fff",
  },
  selectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto", 
  },
  card:{
    height:"80vh",
    display:"flex",
    marginTop: "6px",
    position:"sticky",
  },
  media:{
    borderRadius:"10px",
    marginLeft:"10px",
    width:"250px",
    height:"auto",
    objectFit:"cover",
  },
  cardcontenido:{
    marginTop: theme.spacing(3),
    "& h6":{
        marginTop: theme.spacing(10),
        [theme.breakpoints.down("sm")]:{
          display: "none",
        }
    },
  },
  name:{
    fontFamily:'Arvo',
    alignContent: "justify"
  },
  
  botonpdf:{
    position:"sticky",
    top: "60vh",
    bottom:"1,5 rem",
    right:"15rem",
    [theme.breakpoints.down("sm")]:{
        bottom: 10,
        
    },
    backgroundColor:"#570A57",
    border: "#570A57",
    height:"10vh",
    "& a":{
      color: "#7F8487",
      textDecoration: "none",
      fontWeight: 900,
    }
  },
}))

export default About;