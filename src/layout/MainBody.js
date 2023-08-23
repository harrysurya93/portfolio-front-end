import React, { Fragment } from 'react';
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
    return (
        <Fragment>
            <NavBar />            
                <main>                        
                    <Introduction />

                    <RightSlideAnimation>
                        <About />
                    </RightSlideAnimation>
                        <Experience />
                    <LeftSlideAnimation>
                        <Education />
                    </LeftSlideAnimation>

                            
                        
                        <Work/>
                    <RightSlideAnimation>
                    <Contact />
                    </RightSlideAnimation>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;