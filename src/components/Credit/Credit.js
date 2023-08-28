import React from 'react';
import './Credit.css';
import SocialLinks from '../../database/SocialLinks';

const Credit = () => {

    return (
        <footer className='m-0 py-3' style={{backgroundColor:'#000000'}}>
            <div className='container'>
                <p className='text-lead text-white text-center lh-lg'>Developed and designed by Harry Surya using <mark>React</mark>, <mark>Bootstrap</mark>, and <mark>AWS Amplify</mark>.</p>
                <div className='text-center'>
                    {SocialLinks.map(socialLink => 
                        <a key={socialLink.id} href={socialLink.link} className='text-white mx-1 h4 mx-1' target='_blank'><i className={socialLink.icon}></i></a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Credit;