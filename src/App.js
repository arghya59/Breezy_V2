//React
import Context from "./context/Context"

import { React, createContext, useEffect, useState } from 'react'
import Home from './pages/home/Home';
import About from './pages/about/About'
import { Route, Routes } from 'react-router-dom';
//Css
import './app.css';

//Components
import Navbar from './universal-components/Navbar';


export default function App() {
    return (

        <section className='App'>
            <Context>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="" element={<About />} />
                </Routes>
            </Context>
        </section>
    )
}