import React, { Fragment } from 'react';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import SocialMedia from '../components/SocialMedia/SocialMedia';
import Contact from '../components/Contact/Contact';
import Work from '../components/WorkList/WorkList';

const MainBody = () =>{
    return (
        <Fragment>
            <NavBar />        
            <div className='row mx-0 my-5 p-0' style={{overflowY:'scroll'}} data-bs-spy='scroll' data-bs-target='#portfolioNavBar'>
                <div className='col-1'>
                    <SocialMedia />
                </div>
                <div className='col-10'>
                    <main>
                        <div data-bs-spy='scroll' data-bs-target='#portfolioNavBar' data-bs-root-margin='0px 0px -40%' data-bs-smooth-scroll='true' className='scrollspy-example p-3 rounded-2'>
                            <Introduction />
                            <About />
                            <Experience />
                            <Education />
                            <Work/>
                            <Contact />
                        </div>
                    </main>
                </div>
                <div className='col-1'>
                </div>
            </div>
        </Fragment>
    )
}

export default MainBody;