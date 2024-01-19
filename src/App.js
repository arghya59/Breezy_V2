//React
import Context from "./context/Context"

import { React } from 'react'
import Home from './pages/home/Home';
import About from './pages/about/About'
import { Route, Routes } from 'react-router-dom';
//Css
import './app.css';

//Components
import Navbar from './universal-components/Navbar';
import Footer from "./universal-components/Footer";
import PageNotFound from "./universal-components/PageNotFound";


export default function App() {
    return (

        <>
            {/* Overlay effect at bottom */}
            <div id='overlay'></div>

            <section className='App'>
                <Context>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Context>
            </section>
        </>


    )
}