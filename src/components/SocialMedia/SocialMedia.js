import React from 'react';
import SocialLinks from '../../database/SocialLinks';

const SocialMedia = (props) =>{
    return (
        <div className='fixed-bottom text-center d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block' style={{width:'5vw', marginBottom:'30vh'}}>
            {SocialLinks.map(socialLink =>
                <a key={socialLink.id} className={`btn btn-lg ${props.theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} border-0 px-2 py-1 mb-1`} href={socialLink.href} target='_blank'><i className={socialLink.icon}></i></a>         
            )} 
        </div>
    )
}

export default SocialMedia;