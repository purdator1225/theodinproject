import "./styles.css";


import { loadHome } from "./pageload";

import { loadMenu } from "./menu";

import { loadAbout } from "./about";

const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')

const aboutButton = document.querySelector('#about')

const contentDiv = document.querySelector('#content')


homeButton.addEventListener(('click'),()=>{
    contentDiv.innerText= "";
    loadHome();

})


menuButton.addEventListener(('click'),()=>{
    contentDiv.innerText= "";
    loadMenu();

})

aboutButton.addEventListener(('click'),()=>{
    contentDiv.innerText= "";
    loadAbout();

})