import React from 'react';
import Avatars from '../../database/Avatars';
import { contentIntroduction } from '../../database/Contents';
import { useSelector } from 'react-redux';

const Introduction = () =>{
    const theme = useSelector(state => state.theme);

    return ( 
        <section className='py-5 border-bottom min-vh-100' id='sectionIntroduction'>
            <div className='container'>
                <div className='row my-0 my-xl-5'>
                    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12 my-xl-5 my-auto'>
                        <h5 className='font-monospace display-8 text-sm-start text-center'>{contentIntroduction.welcomeMessage}</h5>
                        <h1 className='font-monospace display-3 text-sm-start text-center'>{contentIntroduction.name}</h1>
                        <h3 className='font-monospace fw-bold text-sm-start text-center'>{contentIntroduction.role}</h3>
                        <p className='font-monospace display-8 fst-italic mb-2 text-sm-start text-center'>{contentIntroduction.short_desc}</p>
                        <p className='font-monospace display-8 fst-italic text-sm-start text-center'><i className='bi bi-geo-alt-fill'></i> Based in <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' target='_blank' href={contentIntroduction.location_link} rel='noreferrer'>{contentIntroduction.location_name}</a></p> 
                        <a className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'} d-none d-lg-block rounded-pill btn-lg w-50 mt-3`} href={contentIntroduction.button_href}>{contentIntroduction.button_text}</a>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 text-center my-xl-5 my-auto'>
                        {Avatars.map(avatar =>
                            <img key={avatar.id}  className='img-thumbnail rounded-pill m-2' width={150} height={150} src={avatar.src} alt={avatar.name} />
                        )}                                   
                        <a className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'} d-block d-lg-none rounded-pill btn-lg mt-3 w-50 mx-auto`} href={contentIntroduction.button_href}>{contentIntroduction.button_text}</a>
                    </div>
                </div> 
            </div>                   
        </section>
    )
}

export default Introduction;