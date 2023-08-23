import React from 'react';

const Credit = () => {
    return (
        <footer className='bg-dark text-center m-0 py-3' style={{minHeight:'25vh'}}>
            <p className='text-white mb-0'>Developed and Designed by Harry Surya</p>
            <p className='text-white mb-0'>Front-End - React, JavaScript, Bootstrap, HTML, CSS</p>
            <p className='text-white mb-0'>Back-End - .NET Core, Entity Framework </p>
            <p className='text-white mb-2'>Cloud Service - AWS Lightsail, AWS Route 53</p>
            <h3>
                <a className='text-white mx-1' href='https://www.linkedin.com/in/harry-surya/' target='_blank'><i className='bi bi-linkedin'></i></a>
                <a className='text-white mx-1' href='https://github.com/harrysurya93' target='_blank'><i className='bi bi-github'></i></a>
                <a className='text-white mx-1' href='https://www.instagram.com/harrysurya93/' target='_blank'><i className='bi bi-instagram'></i></a>
                <a className='text-white mx-1' href='https://www.facebook.com/profile.php?id=100092739357301' target='_blank'><i className='bi bi-facebook'></i></a>
            </h3>

        </footer>
    )
}

export default Credit;