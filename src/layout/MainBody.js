import React, { Fragment, useState, useEffect } from 'react';
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
import Menus from '../database/Menus';

const MainBody = (props) =>{

    const [activeSection, setActiveSection] = useState();
    const [theme, setTheme] = useState();

    useEffect(() => {
        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme','dark');
            setTheme('dark');
            document.documentElement.setAttribute('data-bs-theme','dark');
        }
        else {
            setTheme(localStorage.getItem('theme'));
            document.documentElement.setAttribute('data-bs-theme',localStorage.getItem('theme'));
        }

    }, [theme])
    
    const handleScrollSpy = (id) => {
        setActiveSection(id);  
    }

    return (
        <Fragment>
            <NavBar activeSection={activeSection} theme={theme} setTheme={setTheme} />
            <SocialMedia theme={theme}/>
                <main className='container'>
                    <ScrollSpy activeClass='active' scrollThrottle={50} onUpdateCallback={handleScrollSpy} useBoxMethod={false}>
                        <Introduction theme={theme} />
                        <About theme={theme} />
                        <Experience theme={theme} />
                        <Education />                                                
                        <Project theme={theme} />
                        <Gallery />                   
                        <Contact theme={theme} />
                    </ScrollSpy>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;