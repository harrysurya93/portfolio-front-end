import React from 'react';
import './Experience.css';
import Experiences from '../../database/Experiences';

const Experience = (props) => {

    return (
        <section className='py-5 border-bottom' id='sectionExperience'>
            <div className='container px-xl-5 py-xl-3 p-sm-0'>
                <p className='text-center display-6'>Work Experience</p>                
                <div className={`accordion accordion-flush border-top ${props.theme === 'dark' ? 'bg-dark' : 'bg-light'}`} id='accordionPanelsStayOpenExample'>
                    {Experiences.map((experience,index) => 
                        <div key={experience.id} className='accordion-item'>
                            <h2 className='accordion-header'>
                                <button className={`accordion-button ${props.theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`} type='button' data-bs-toggle='collapse' data-bs-target={`#panelsStayOpen-collapse${index}`} aria-expanded='true' aria-controls={`panelsStayOpen-collapse${index}`}>
                                    <p className='mb-0'><i className='bi bi-buildings-fill'></i> <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href={experience.company_link}>{experience.company_name}</a> - <span className='fst-italic'>{experience.job_title}</span><br/> {experience.startDate} - {experience.endDate}</p>
                                </button>
                            </h2>
                            <div id={`panelsStayOpen-collapse${index}`} className='accordion-collapse collapse show'>
                            <div className='accordion-body'>
                                <ul>
                                    {experience.responsibilities.map(responsibility =>
                                        <li key={responsibility.id}>{responsibility.value}</li>
                                    )}
                                </ul>
                            </div>
                            </div>
                        </div>
                    
                    )}
                                        
                </div>
            </div>
        </section>
    )
}

export default Experience;