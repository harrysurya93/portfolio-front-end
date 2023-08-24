import React from 'react';
import ReactDOM from 'react-dom';

const SocialMedia = () =>{
    return (
        <div className='fixed-bottom text-center d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block' style={{width:'5vw', marginBottom:'30vh'}}>
            <h2><a className='' href='https://www.linkedin.com/in/harry-surya/' target='_blank'><i className='bi bi-linkedin'></i></a></h2>
            <h2><a className='' href='https://github.com/harrysurya93' target='_blank'><i className='bi bi-github'></i></a></h2>
            <h2><a className='' href='https://www.instagram.com/harrysurya93/' target='_blank'><i className='bi bi-instagram'></i></a></h2>
            <h2><a className='' href='https://www.facebook.com/profile.php?id=100092739357301' target='_blank'><i className='bi bi-facebook'></i></a></h2>
            <h2><a className='' href='mailto:harrysurya93@gmail.com' target='_blank'><i className='bi bi-envelope-at-fill'></i></a></h2>
        </div>
    )
}

export default SocialMedia;