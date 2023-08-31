import React, { Fragment, useEffect } from 'react';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Project from '../components/Project/Project';
import Credit from '../components/Credit/Credit';
import '../layout/MainBody.css';
import Gallery from '../components/Gallery/Gallery';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import ScrollSpy from 'react-ui-scrollspy';
import { useSelector } from 'react-redux';

const MainBody = () =>{

    const theme = useSelector(state => state.theme);

    useEffect(() => {
        localStorage.setItem('theme',theme);
        document.documentElement.setAttribute('data-bs-theme',theme);
    }, [theme])
    
    return (
        <Fragment>
            <NavBar />
            <SocialMedia/>
                <main className='container'>
                    <ScrollSpy activeClass='active' scrollThrottle={50} useBoxMethod={false}>
                        <Introduction />
                        <About />
                        <Experience />
                        <Education />                                                
                        <Project />
                        <Gallery />                   
                        <Contact />
                    </ScrollSpy>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;