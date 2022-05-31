import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Tecnologias from './Tecnologias';

const Skills = ({title , dark, id}) => {
  const classes = useStyle();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={ classes.selectioncontent} id={id}>
        <Typography variant='h3'>
          {title}
        </Typography>
        <Tecnologias>
          
        </Tecnologias>

      </div>
    </div>
  )
}
const useStyle = makeStyles ((theme) => ({
  section:{
    minHeight: "100vh",

  },
  sectiondark:{
    background : "#7F8487",
    color : "#fff",
  },
  selectioncontent:{
    maxWidth: "80vw",
    margin: "0 auto", 
  }
}))

export default Skills;