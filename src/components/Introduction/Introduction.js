import React, { useEffect, useState, useRef} from 'react';
import ProfilePicture from '../../assets/images/ProfilePicture.png';
import ProfilePicture2 from '../../assets/images/images.jpeg';
import ProfilePicture3 from '../../assets/images/images2.png';
import '../Introduction/Introduction.css';

const Introduction = (props) =>{

    const [imageFocus, setImageFocus] = useState(false);
    const imageReference = useRef();
    const handleImageTransition = () =>{
        if(imageFocus) {
            imageReference.current.src = ProfilePicture2;
        }
        else{
            imageReference.current.src = ProfilePicture3;
        }
    }

    useEffect(() => {
        handleImageTransition();
    }, [imageFocus])

    return ( 
        <section className='' id='scrollSpyIntroduction' onMouseEnter={() => props.handlePointerEvent(0)}>
            <div className='container'>
                <div className='row align-items-center text-center py-3' style={{minHeight:'100vh'}}>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
                        <h5 className='font-monospace display-8 text-light fw-lighter'>Hello World, my name is</h5>
                        <h1 className='font-monospace display-3  text-light'>Harry Surya</h1>
                        <h3 className='font-monospace fw-bold text-light'>Full-Stack Developer</h3>
                        <p className='font-monospace display-8 fst-italic mb-0  text-light'>Experienced for 5 years creating and designing website for several companies.</p>
                        <p className='font-monospace display-8 fst-italic mb-0  text-light'><i className='bi bi-geo-alt-fill'></i> Based in <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' target='_blank' href='https://goo.gl/maps/RqFsQb1WF2reuUhk9'>Vancouver, BC, Canada.</a></p> 
                        <a className='btn btn-grad btn-lg mt-5 w-50 mx-auto rounded-pill' href='#scrollSpyAbout'>About Me</a>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 ps-5 text-center p-5'>                    
                        <img onMouseEnter={() => setImageFocus(true)} onMouseLeave={()=> setImageFocus(false)} ref={imageReference} className='img-thumbnail' src={ProfilePicture} />
                    </div>
                </div>                    
            </div>
        </section>
    )
}

export default Introduction;