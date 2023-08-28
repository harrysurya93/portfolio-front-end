import React from 'react';
import Educations from '../../database/Educations';
import './Education.css';

const Education = (props) => {

    return (
        <section className='py-5 border-bottom' id='sectionEducation' >
           <div className='container px-xl-5 py-xl-3 p-sm-0'>
                <p className='display-6 text-center'>Education</p>
                <div className='row mx-xl-5'>
                    {Educations.map( education =>                    
                        <div key={education.id} className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto p-0 my-2'>
                            <div className='card card-body h-100 p-0 mx-5 mx-xl-5' >
                                <a href={education.href} target='_blank' >
                                    <img src={education.src} className='card-img-top img-responsive bg-white border-bottom' width={250} height={250} alt={education.alt} />
                                </a>
                                <div className='p-3'>
                                    <p className='mb-0'><i className='bi bi-book-fill'></i> {education.major}</p>
                                    <p className='mb-0'><i className='bi bi-mortarboard-fill'></i> {education.degree}</p>
                                    <p className='mb-0'><i className='bi bi-trophy-fill'></i> GPA {education.gpa.toFixed(2)} / 4.00</p>
                                    <p className='mb-0'><i className='bi bi-calendar4-week'></i> {education.startYear} - {education.endYear}</p>
                                    {education.publications.map(publication =>
                                        <p key={publication.id} className='mb-0'><i className='bi bi-paperclip'></i> <a target='_blank' className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href={publication.href}>Publication</a></p>                                    
                                    )}
                                </div>
                            </div>
                        </div>
                    
                    )}
                </div>
            </div>
        </section>
    )
}

export default Education;