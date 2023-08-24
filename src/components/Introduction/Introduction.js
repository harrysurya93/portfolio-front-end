import React, { Fragment, useEffect, useRef, useState } from 'react';
import ProfilePicture2 from '../../assets/images/images.jpeg';
import ProfilePicture3 from '../../assets/images/images2.png';
import '../Introduction/Introduction.css';

const Introduction = (props) =>{

    const [imageFocus, setImageFocus] = useState(false);
    const imageReference = useRef();
    const handleImageTransition = () =>{
        if(imageFocus) {
            imageReference.current.src = ProfilePicture3;
        }
        else{
            imageReference.current.src = ProfilePicture2;
        }
    }

    useEffect(() => {
        handleImageTransition();
    }, [imageFocus])

    return (
        <Fragment>            
            <section className='' id='scrollSpyIntroduction' style={{height:'100vh'}}>
                <div className='container' style={{width:'80vw'}}>
                    <div className='row my-auto align-items-center' style={{height:'100vh'}}>
                        <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 align px-5 m-0 my-auto'>
                            <h5 className='font-monospace display-8 text-light fw-lighter'>Hello World, my name is</h5>
                            <h1 className='font-monospace display-3  text-light'>Harry Surya</h1>
                            <h3 className='font-monospace fw-bold text-light'>Full-Stack Developer</h3>
                            <p className='font-monospace display-8 fst-italic nowrap mb-0  text-light'>Experienced for 5 years creating and designing website for several companies.</p>
                            <p className='font-monospace display-8 fst-italic mb-0  text-light'><i className='bi bi-geo-alt-fill'></i> Based in <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' target='_blank' href='https://goo.gl/maps/RqFsQb1WF2reuUhk9'>Vancouver, BC, Canada.</a></p> 
                            <p className='font-monospace fw-bold mt-5 typing-animation-end mb-0  text-light'>/* Welcome to my portfolio website.</p>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center'>                    
                            <img onMouseEnter={() => setImageFocus(true)} onMouseLeave={()=> setImageFocus(false)} ref={imageReference} className='img-fluid border-0 rounded-pill' width={350} src={ProfilePicture2} />
                        </div>
                    </div>                    
                </div>
            </section>
        </Fragment>
    )
}

export default Introduction;