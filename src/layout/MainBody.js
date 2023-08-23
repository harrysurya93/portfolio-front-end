import React, { Fragment, useEffect, useState } from 'react';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import Contact from '../components/Contact/Contact';
import Work from '../components/WorkList/WorkList';
import LeftSlideAnimation from './LeftSlideAnimation';
import RightSlideAnimation from './RightSlideAnimation';
import Credit from '../components/Credit/Credit';

const MainBody = () =>{

    const [scrollPointer, setScrollPointer] = useState(0);

    return (
        <Fragment>
            <NavBar scrollPointer={scrollPointer} />            
                <main>                  
                    <Introduction setScrollPointer={setScrollPointer} />
                    <About setScrollPointer={setScrollPointer} />
                    <Experience setScrollPointer={setScrollPointer} />
                    <Education setScrollPointer={setScrollPointer} />                        
                    <Work setScrollPointer={setScrollPointer} />
                    <Contact setScrollPointer={setScrollPointer} />
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;