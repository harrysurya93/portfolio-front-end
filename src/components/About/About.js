import React from 'react';
import PieChart from './PieChart';
import { contentAbout } from '../../database/Contents';
import './About.css';
import Skills from '../../database/Skills';

const About = (props) => {

    return (
        <section className='py-5 border-bottom' id='sectionAbout'> 
            <div className='container px-xl-5 py-xl-3 p-sm-0'>
                <p className='display-6 text-center'>{contentAbout.title}</p>
                <div className='row m-0 p-0'>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0'>
                        {contentAbout.paragraphs.map(paragraph =>
                            <p key={paragraph.id}>{paragraph.value}</p>
                            )}
                        {Skills.map(skill =>
                            <div key={skill.id}>
                                <p className='list-item mb-0'>{skill.type}</p>
                                {skill.details.map(detail => 
                                    <p key={detail.id} className='badge text-dark mx-1' style={{backgroundColor:`${skill.color}`}}>{detail.name}</p>
                                )}
                            </div>                                    
                            )}
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 p-0 mt-5'>
                            <PieChart Skills={Skills} theme={props.theme} />
                        </div>
                    </div>
                </div>                
        </section>
    )
}

export default About;