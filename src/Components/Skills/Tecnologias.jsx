import React from 'react';
import {makeStyles, Paper, Typography } from '@material-ui/core';
import reactjs from "../../Img/Skills/1631110818-logo-react-js.png";
import node from "../../Img/Skills/1280px-Node.js_logo.svg.png";
import cishart from "../../Img/Skills/C++-Logo.wine.png";
import express from "../../Img/Skills/Expressjs.png";
import js from "../../Img/Skills/images.png";
import materialUI from "../../Img/Skills/material-ui-logo-5BDCB9BA8F-seeklogo.com.png";
import net from "../../Img/Skills/NET_Core_Logo.svg.png";
import pgdmin from "../../Img/Skills/PostgreSQL-Logo.png";
import sequalize from "../../Img/Skills/sequelizejs-ar21.png";
import { Grid, IconButton, Link } from '@material-ui/core';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOpositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineContent from '@material-ui/lab/TimelineContent';
import StartRating from './StartRating';
const Tecnologias = () => {
const skillsIcons =[
    {
        
        src: reactjs , 
        title: "React.js",
        year: "2021",
        description:"usado en: ",
        stars: 2,
    
    },

    {   src: node ,
        title: "Node.js",
        year: "2021",
        description:"usado en: ",
        stars: 2
    },
    {   src: cishart ,
        title: "C++",
        year: "2021",
        description:"usado en: ",
        stars: 1,
    }
        , 
    {   src: express , 
        title:"Express",
        year: "2021",
        description:"usado en: ",
        stars: 2,
    }, 
    {   src: js , 
        title:"JavaScript",
        year: "2021",
        description:"usado en: ",
        stars: 3,
    }, 
    {   
        src: materialUI , 
        title:"MaterialUI",
        year: "2021",
        description:"usado en: ",
        stars: 2,
    },
    {   src: net , 
        title:".Net",
        year: "2021",
        description:"usado en: ",
        stars: 1,

},
    {   src: pgdmin , 
        title:"Postgres",
        year: "2021",
        description:"usado en: ",
        stars: 2,

},
    {   
        src: sequalize , 
        title:"Sequalize",
        year: "2021",
        description:"usado en: ",
        stars: 2,

    },
]
const classes = useStyle();

  return (
    <Timeline align='left'>
        {
            
            skillsIcons.map(({src, title, year, description, stars}, index)=>(
                <TimelineItem key={index}>
                    <TimelineOpositeContent>
                        <Typography variant ="h6" color= "secondary">
                            {year} 
                        </Typography>
                       
                    </TimelineOpositeContent>
                    <TimelineSeparator>
                    <img src={src} alt= {title} className={classes.logosSkills}/> 
                      <TimelineConnector/> 
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation= {3} className= {classes.description}>
                            <Typography variant='h6' component="h1">
                             {title}
                            </Typography>
                            <StartRating stars= {stars}>

                            </StartRating>
                        </Paper>

                    </TimelineContent>
                                   
                </TimelineItem>
            ))
        }
    </Timeline>

  )
}
const useStyle = makeStyles ((theme) => ({
    logosSkills:{
        width: "50px",
        height:"50px"
    },
    description:{
        borderRadius: "10px",
        padding:"6px 16px",
    },
  }))

export default Tecnologias