import React, { useState } from 'react';
import './WorkList.css';
import Projects from '../../database/Projects';

const Work = (props) => {

    const [isShow, setShow] = useState(false);
    const [totalItemShowing, setTotalItemShowing] = useState(4);    

    const showMore = () =>{
        setShow(true);
        setTotalItemShowing(Projects.length);
    }

    const showLess = () =>{
        setShow(false);
        setTotalItemShowing(4);
    }

    return (
        <section className='py-5' id='sectionWork' onMouseEnter={() => props.handlePointerEvent(4)}>
            <div className='container'>
                <p className='display-5 text-center'>Work Experience</p>
                <div className='row m-0 p-0'>
                    {Projects.slice(0,totalItemShowing).map(project => 
                        <div key={project.id} className='col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-1'>
                            <div className='card h-100'>
                                <div className='card-body'>
                                    <p className='h5 mb-1'><i className='bi bi-window'></i> {project.name}</p>
                                    <p className='mb-1 text-muted'><i className='bi bi-buildings-fill'></i> {project.company}</p>
                                    <p className='mb-0'>{project.description}</p>
                                    {project.techs.map(tech => 
                                        <span key={tech.id} className='badge text-bg-secondary me-1'>{tech.name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='my-1 text-center'>
                        {isShow ? <button className={`btn ${props.theme === 'dark' ? 'btn-dark' : 'btn-light'} `} onClick={showLess}>Show Less <i className='bi bi-arrow-up'></i></button> : <button className={`btn ${props.theme === 'dark' ? 'btn-dark' : 'btn-light'}`} onClick={showMore}>Show More <i className='bi bi-arrow-down'></i></button> }
                    </div>                                            
                </div>
            </div>
        </section>
    )
}

export default Work;