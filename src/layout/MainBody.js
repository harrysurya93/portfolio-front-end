import React, { Fragment, useState } from 'react';
import Introduction from '../components/Introduction/Introduction';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';
import Work from '../components/WorkList/WorkList';
import Credit from '../components/Credit/Credit';
import '../layout/MainBody.css';
import Gallery from '../components/Gallery/Gallery';
import SocialMedia from '../components/Social Media/SocialMedia';

const MainBody = () =>{

    const [pointer, setPointer] = useState(0);

    const handlePointerEvent = (index) => {
        setPointer(index);
    }
    return (
        <Fragment>          
            <NavBar pointer={pointer} />            
            <SocialMedia/>
                <main >
                    <Introduction handlePointerEvent={handlePointerEvent} />
                    <About  handlePointerEvent={handlePointerEvent}/>
                    <Experience  handlePointerEvent={handlePointerEvent}/>
                    <Education  handlePointerEvent={handlePointerEvent}/>
                    <Work  handlePointerEvent={handlePointerEvent}/>
                    <Gallery  handlePointerEvent={handlePointerEvent}/>                   
                    <Contact  handlePointerEvent={handlePointerEvent}/>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;