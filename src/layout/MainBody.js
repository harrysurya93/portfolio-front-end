import React, { Fragment, useState, useEffect } from 'react';
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
import SocialMedia from '../components/SocialMedia/SocialMedia';

const MainBody = (props) =>{

    const [theme, setTheme] = useState();
    const [pointer, setPointer] = useState(0);

    const handlePointerEvent = (index) => {
        setPointer(index);
    }

    //intialize
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
    
    return (
        <Fragment>
            <NavBar theme={theme} setTheme={setTheme} />      
            <SocialMedia theme={theme}/>
                <main>
                    <div className='container'>
                        <Introduction theme={theme} handlePointerEvent={handlePointerEvent} />
                        <hr/>
                        <About theme={theme} handlePointerEvent={handlePointerEvent}/>
                        <hr/>
                        <Experience theme={theme} handlePointerEvent={handlePointerEvent}/>
                        <hr/>
                        <Education handlePointerEvent={handlePointerEvent}/>
                        <hr/>
                        <Work theme={theme} handlePointerEvent={handlePointerEvent}/>
                        <hr/>
                        <Gallery handlePointerEvent={handlePointerEvent}/>                   
                        <hr/>
                        <Contact theme={theme} handlePointerEvent={handlePointerEvent}/>
                    </div>
                </main>
            <Credit />
        </Fragment>
    )
}

export default MainBody;