import React, { Fragment, useEffect, useRef } from 'react';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Work from '../components/WorkList/WorkList';
import Credit from '../components/Credit/Credit';
import ScrollSpy from "react-ui-scrollspy";
import '../layout/MainBody.css';

const MainBody = () =>{

    return (
        <Fragment>                        
            <NavBar />            
                <main >
                    <ScrollSpy scrollThrottle={100} >
                        <Introduction />
                        <About />
                        <Experience />
                        <Education />                        
                        <Work />
                        <Contact />
                    </ScrollSpy>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;