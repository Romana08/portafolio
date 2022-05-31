import React from 'react';
import { Card, CardContent, CardMedia, Grid, Link, makeStyles, Typography } from '@material-ui/core';
// import MocData from './MocData';
import lp from "../../Img/PI/Capturas/lp.png";
import ecomerce from "../../Img/PI/Capturas/form.png"

const mocData = [{
    title:"Pi-Counties",
    src: lp,
    link: "https://www.youtube.com/watch?v=LwG6a3Lrs4Y"
},
  {
    title:"E-commerce",
    src: ecomerce,
    link: "https://www.youtube.com/watch?v=LwG6a3Lrs4Y"
  }
]
const MyWork = ({title , dark, id}) => {
  const classes = useStyle();
  return (
    <div className={`${classes.section} ${dark && classes.sectiondark}`}>
      <div className={ classes.sectioncontent} id={id}>
        <Typography variant='h3'>
          {title}
        </Typography>
        <Grid constainer className={classes.grid}>
          {
            mocData.map(({title, src, link}, index)=>(
              <Grid item key= {index}          
              >
                <Card className={classes.card}>
                  <CardMedia image={src} titulo ="caratula" className={classes.caratula}>
                    <CardContent>
                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                      {title}
                      </Link>
                    </CardContent>
                  </CardMedia>
                </Card>
              </Grid>
            ))
          }
        </Grid>
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
  sectioncontent:{
    maxWidth: "90vh",
    margin:"0 auto" ,
    padding: theme.spacing(5)
  },
  grid:{
    marginTop: theme.spacing(10),

  },
  card:{
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),

  },
  caratula:{
    height: 0,
    paddingTop: '56.25%'
  }
}))

export default MyWork;