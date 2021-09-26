//1) Me traigo la librería React

import React from 'react';  

//2) Me traigo la librería ReactDOM

import ReactDOM from 'react-dom'; 

//3) Importo un componente 

import Nav from "./Nav";

import "./estilos.css"

import 'bootstrap/dist/css/bootstrap.min.css';


//4) Renderizo el componente

ReactDOM.render(
    <Nav />,
    document.getElementById("root"))
