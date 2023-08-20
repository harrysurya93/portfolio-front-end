import React, { Fragment } from 'react';

const SocialMedia = () => {
    return (
        <Fragment>
            <div className='position-absolute bottom-0 start-0'>
                <h2><a className='text-dark' href='https://www.linkedin.com/in/harry-surya/' target='_blank'><i className='bi bi-linkedin'></i></a></h2>
                <h2><a className='text-dark' href='https://github.com/harrysurya93' target='_blank'><i className='bi bi-github'></i></a></h2>
                <h2><a className='text-dark' href='https://www.instagram.com/harrysurya93/' target='_blank'><i className='bi bi-instagram'></i></a></h2>
                <h2><a className='text-dark' href='https://www.facebook.com/profile.php?id=100092739357301' target='_blank'><i className='bi bi-facebook'></i></a></h2>
            </div>
        </Fragment>
    )
}

export default SocialMedia;