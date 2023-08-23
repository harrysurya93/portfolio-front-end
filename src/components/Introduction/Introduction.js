import React, { Fragment, useEffect, useRef, useState } from 'react';
import ProfilePicture2 from '../../assets/images/images.jpeg';
import ProfilePicture3 from '../../assets/images/images2.png';
import '../Introduction/Introduction.css';

const Introduction = () =>{

    const [imageFocus, setImageFocus] = useState(false);
    const imageReference = useRef();
    const handleImageTransition = () =>{
        if(imageFocus) {
            imageReference.current.src = ProfilePicture3;
            console.log(imageFocus);
        }
        else{
            imageReference.current.src = ProfilePicture2;
            console.log(imageFocus);
        }
    }

    useEffect(() => {
        handleImageTransition();
    }, [imageFocus])

    return (
        <Fragment>            
            <section className='row m-0 p-0 align-items-center' id='IntroductionSection'>
                <div className='col-xl-1 col-lg-1 col-md-0 col-sm-0 d-none d-xs-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block ps-4 m-0'>
                    <h2><a className='text-white' href='https://www.linkedin.com/in/harry-surya/' target='_blank'><i className='bi bi-linkedin'></i></a></h2>
                    <h2><a className='text-white' href='https://github.com/harrysurya93' target='_blank'><i className='bi bi-github'></i></a></h2>
                    <h2><a className='text-white' href='https://www.instagram.com/harrysurya93/' target='_blank'><i className='bi bi-instagram'></i></a></h2>
                    <h2><a className='text-white' href='https://www.facebook.com/profile.php?id=100092739357301' target='_blank'><i className='bi bi-facebook'></i></a></h2>
                </div>
                <div className='col-xl-7 col-lg-7 col-md-12 col-sm-12 align px-5 m-0' style={{}}>
                    <h5 className='font-monospace display-8 text-light fw-lighter'>Hello World, my name is</h5>
                    <h1 className='font-monospace display-3  text-light'>Harry Surya</h1>
                    <h3 className='font-monospace fw-bold text-light'>Full-Stack Developer</h3>
                    <p className='font-monospace display-8 fst-italic nowrap mb-0  text-light'>Experienced for 5 years creating and designing website for several companies.</p>
                    <p className='font-monospace display-8 fst-italic mb-0  text-light'><i class="bi bi-geo-alt-fill"></i> Based in <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' target='_blank' href='https://goo.gl/maps/RqFsQb1WF2reuUhk9'>Vancouver, BC, Canada.</a></p> 
                    <p className='font-monospace fw-bold mt-5 typing-animation-end mb-0  text-light'>/* Welcome to my portfolio website.</p>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center'>                    
                    <img onMouseEnter={() => setImageFocus(true)} onMouseLeave={()=> setImageFocus(false)} ref={imageReference} className='img-fluid border-0 rounded-pill' width={350} src={ProfilePicture2} />
                </div>
            </section>
        </Fragment>
    )
}

export default Introduction;