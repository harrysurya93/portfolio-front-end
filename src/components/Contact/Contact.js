import React from 'react';
import './Contact.css';
import { contentContact } from '../../database/Contents';
import { useSelector } from 'react-redux';

const Contact = () =>{

    const theme = useSelector(state => state.theme);

    return (
            <section className='py-5' id='sectionContact' >
                <div className='container px-xl-5 py-xl-3 p-sm-0'>
                    <p className='display-5 text-center'>Contact Me</p>
                    <blockquote className='blockquote fs-6'>
                        <p>{contentContact.startMessage}</p>
                        {contentContact.paragraphs.map(paragraph =>
                            <p key={paragraph.id}>{paragraph.value}</p>    
                        )}
                        <br/>
                        <p className='mb-0'>{contentContact.finalMessage}</p>
                        <p>{contentContact.name}</p>
                    </blockquote>
                    <div className='text-center'>
                        <a href={contentContact.src} className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'} btn-lg`} type='button'><i className={contentContact.button_icon}></i> {contentContact.button_text}</a>
                    </div>
                </div>
            </section>
    )
}

export default Contact;