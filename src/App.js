//React
import { Fragment, React, Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import Context from "./context/Context"
import About from './pages/about/About'
//Css
import './app.css';
import './mediaQuery.css'
//Components
import Navbar from './universal-components/Navbar';
import Footer from "./universal-components/Footer";
import PageNotFound from "./universal-components/PageNotFound";
import Loader from './universal-components/Loader';

const Home = lazy(() => import('./pages/home/Home'))

export default function App() {
    return (
        <Fragment>
            <div id='overlay'></div>
            <section className='App'>
                <Context>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={
                            <Suspense fallback={<Loader LoaderText="Getting data..." />}>
                               <Home />
                            </Suspense>
                        } />
                        <Route path="" element={<About />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Context>
            </section>
        </Fragment>


    )
}