import React, { useState } from "react";
import { AppBar, IconButton, List, ListItem, ListItemIcon, Toolbar } from "@material-ui/core";
// import {useMediaQuery} from '@material-ui/core';
import logo from "../../Img/Logo/lp.png";
import { makeStyles } from "@material-ui/styles";
import { Avatar } from "@material-ui/core";
import EmojiObjectsTwoTone from "@material-ui/icons/EmojiObjectsTwoTone";
import BuildTwoTone from "@material-ui/icons/BuildTwoTone";
import { Link, animateScroll as scroll } from "react-scroll";
import AddIcCall from "@material-ui/icons/AddIcCall";
import foto from "../../Img/Logo/foto.jpeg";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";


const NavBar = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: "Sobre Mi",
      text: "SOBRE MI",
      className: "MiAvatar",
      icon: <Avatar alt="Remy Sharp" src={foto} 
      />
    },
    {
      id: "skills",
      text: "SKILLS",
      icon: <EmojiObjectsTwoTone className={classes.skills} />,
    },
    {
      id: "work",
      text: "MIS TRABAJOS",
      className: "proyectos",
      icon: <BuildTwoTone />,
    },
    {
      id: "contacto",
      text: "CONTACTO",
      className: "contacto",
      icon: <AddIcCall />,
    },
  ];
  return (
    <> 
      <AppBar position ="fixed" className={classes.root}>
    <Paper className={classes.paper}>
        <Container maxWhidth="md">
          <Toolbar className={classes.toolsbar}>
            <Hidden xsDown>
              <img src={logo} alt="Logo" className={classes.logo} />
              <List className={classes.menu}>
                {links.map(({ id, text }, index) => (
                  <Link
                    key={index}
                    to={id}
                    spy={true}
                    activeClass="active"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {text}
                  </Link>
                ))}
              </List>
            </Hidden>

            <Hidden smUp>
              <IconButton anchor="right" color="#F73D93" />
              <MenuIcon
                className={classes.menusanguche}
                onClick={() => setOpen(true)}
              />
            </Hidden>
          </Toolbar>
          
        </Container>
        <SwipeableDrawer
          anchor="left"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} />
            </IconButton>
          </div>
          <Divider />
          <List>
            {links.map(({ id, text, icon }, index) => (
              <ListItem>
                <Link
                  className={classes.sidebar}
                  key={index}
                  color="textPrimary"
                  to={id}
                  spy={true}
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  underline="none"
                  offset={-70}
                  href={id}
                >
                  <ListItem component= "h4">
                    <span>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                    </span>{text}
                  </ListItem>
                </Link>
              </ListItem>
            ))}
          </List>
                   
        </SwipeableDrawer>
        
      </Paper>
      </AppBar>
    </>
  );
};

const useStyle = makeStyles((theme) => ({
  paper:{
    height:"100%",
    backgroundImage: "url(https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80)",

  },
  root: {
    backgroundColor: "#16003B",
    // top: 0,
    // left: 0,
    // right: 0,
    // zIndex: 999,
    // fontFamily: ""


  },
  toolsbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "3.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer",
    },
  },
  skills:{
    color:"#F73D93"
  },
  
  menu: {
       "& a": {
      color: "#333",
      fontSize: "1.4 rem",
      fontWeight: "bold",
      padding: "15px",
    },
    "& a:hover": {
      cursor: "poitner",
      color: "#F73D93",
      borderBotton: "3px solid tomato",
    },
    menubutton: {
      color: "#333",
      display: "none",

      //  [theme.breakpoints.down("sm")]:{
      //   color: "tomato",
      //  }
    },
    menusanguche: {
      fontSize: "large",
      color: "#333",
    },
    sidebar:{
      width: "40vw"
    },
    "& h4":{
      fontSize:"1.4rem",
      color:"#333",
      fontWeight:"bold",
      textDecoration:"none"
    },
    "& h4:hover":{

      color: "tomato",
      cursor:"poitner"
    }
  },
}));

export default NavBar;
