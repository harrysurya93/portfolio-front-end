import React, { useEffect, useState, useRef} from 'react';
import Avatars from '../../database/Avatars';
import { contentIntroduction } from '../../database/Contents';

const Introduction = (props) =>{

    return ( 
        <section className='container' id='sectionIntroduction' onMouseEnter={() => props.handlePointerEvent(0)} style={{minHeight:'100vh'}}>
            <div className='row align-items-center text-center py-3' style={{minHeight:'100vh'}}>
                <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
                    <h5 className='font-monospace display-8'>{contentIntroduction.welcomeMessage}</h5>
                    <h1 className='font-monospace display-3'>{contentIntroduction.name}</h1>
                    <h3 className='font-monospace fw-bold'>{contentIntroduction.role}</h3>
                    <p className='font-monospace display-8 fst-italic mb-0'>{contentIntroduction.short_desc}</p>
                    <p className='font-monospace display-8 fst-italic mb-0'><i className='bi bi-geo-alt-fill'></i> Based in <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' target='_blank' href={contentIntroduction.location_link}>{contentIntroduction.location_name}.</a></p> 
                    <a className={`btn ${props.theme === 'dark' ? 'btn-light' : 'btn-dark'} d-none d-sm-block rounded-pill btn-lg mt-5 w-50 mx-auto`} href='#sectionAbout'>About Me</a>
                </div>
                <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center'>
                    {Avatars.map(avatar =>
                        <img key={avatar.id}  className='img-thumbnail rounded-pill m-1' width={150} height={150} src={avatar.src} />
                    )}                                   
                    <a className={`btn ${props.theme === 'dark' ? 'btn-light' : 'btn-dark'} d-block d-sm-none rounded-pill btn-lg mt-5 w-50 mx-auto`} href={contentIntroduction.button_href}>{contentIntroduction.button_text}</a>
                </div>
            </div>                    
        </section>
    )
}

export default Introduction;