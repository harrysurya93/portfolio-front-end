import React from 'react';
import SocialLinks from '../../database/SocialLinks';

const SocialMedia = (props) =>{
    return (
        <div className='fixed-bottom text-center d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block' style={{width:'5vw', marginBottom:'30vh'}}>
            {SocialLinks.map(socialLink =>
                <p key={socialLink.id} className='mb-0'>
                    <a href={socialLink.href} className={`btn btn-lg ${props.theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} border-0 px-2 py-1 mb-1`} target='_blank'><i className={socialLink.icon}></i></a>
                </p>
            )} 
        </div>
    )
}

export default SocialMedia;