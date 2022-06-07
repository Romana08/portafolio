import React from 'react';
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import {Grid, IconButton, List  } from '@material-ui/core';
import Link from 'react-scroll/modules/components/Link';
import { makeStyles } from '@material-ui/styles';

const mediosDeContacto = [
    {
      name: "Gihub",
      icon: GithubIcon,
      url: "https://github.com/Romana08"
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/in/romina-morton-delgado/"
    },
    {
      name: "Wapp",
      icon: WhatsAppIcon,
      url: "https://wa.me/543516014087"
    },
    {
      name: "email",
      icon: EmailIcon,
      url: "https://wa.me/543516014087"
    },
  ]
 
  const Redes = () => {
    const classes = useStyle();
    return (
    <Grid  position="bock" spacing={2} className = {classes.section}>
      {mediosDeContacto.map((item) => (
        <Grid item key={item.name}>
          <Link href={item.url}>
            <IconButton className={classes.iconos}>
              <item.icon />
            </IconButton>
          </Link>
        </Grid>
      ))}
    </Grid>

  )
}

const useStyle = makeStyles ((theme)=> ({
  section:{
    minHeight: "10vh",
    padding: "4vh",
    display:"flex",
  },
  iconos:{
    padding: "5px", 
    margin: "15px",
    height:"10vh",
    width:"10vh",
    
  }, 


})) 
export default Redes;