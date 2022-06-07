import React from 'react';
import About from '../About/About';
import { makeStyles, Paper } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { CssBaseline } from '@material-ui/core/CssBaseline';
import Skills from '../Skills/Skills';
import MyWork from '../MyWork/MyWork';
import Contacto from '../Contacto/Contacto';

const Home = () => {

  const styles = useStyle();


  const darkTheme = createTheme ({
    palette: {
      type: "dark"
    }
  })
  return (
    <Paper className={styles.section}>
      <ThemeProvider theme = {darkTheme}>
      <About  title= "Sobre mi" id= "Sobre Mi"/>
      </ThemeProvider>
      <ThemeProvider theme = {darkTheme}>

      <Skills title= "Skills" dark= {true} id= "skills"/>
      </ThemeProvider>
      <ThemeProvider theme = {darkTheme}>
       <MyWork title= "My work"  dark= {true} id= "work"/>
     </ThemeProvider>
     <ThemeProvider theme = {darkTheme}>
     <Contacto title= "Get in touch" dark= {true} id= "contacto"/>
      </ThemeProvider>
    </Paper>
  )
}

const useStyle = makeStyles((theme)=>({
 section: {
  height: "90vh",
  backgroundImage: "url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)",
  backgroundSize: "cover",
  backgroundPosition:"center"
 },
}))
export default Home;