import React, { Fragment } from 'react';

const Education = (props) => {
    return (
        <Fragment>
            <section className='px-4 py-5 bg-secondary-subtle' id='scrollSpyEducation' style={{minHeight:`25vh`}} onPointerEnter={() => props.setScrollPointer(3)}>
                <div className='container mx-auto'>

            <p className='display-5 py-2 mx-0 mb-3'>Education</p>
                <div className='row'>
                <div className='col'>
                    <div className='collapse multi-collapse show' id='multiCollapseExample1'>
                    <div className='card card-body'>
                        <p className='display-7 mb-0 fw-bolder'> <a href='https://binus.ac.id' className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Binus University</a></p>
                        <p className='display-7 text-muted mb-0'>Computer Science</p>
                        <p className='display mb-0'><i className='bi bi-mortarboard-fill'></i> Master's Degree</p>
                        <p className='display mb-0'><i className='bi bi-trophy-fill'></i> GPA 3.90</p>
                        <p className='display mb-0'><i className='bi bi-calendar4-week'></i> 2020-2022</p>
                    </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='collapse multi-collapse show' id='multiCollapseExample2'>
                    <div className='card card-body'>
                        <p className='display-7 mb-0 fw-bolder'> <a href='https://mikroskil.ac.id' className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Mikroskil University</a></p>
                        <p className='display-7 text-muted mb-0'>Computer Engineering</p>
                        <p className='display mb-0'><i className='bi bi-mortarboard-fill'></i> Bachelor's Degree</p>
                        <p className='display mb-0'><i className='bi bi-trophy-fill'></i> GPA 3.03</p>
                        <p className='display mb-0'><i className='bi bi-calendar4-week'></i> 2012-2018</p>
                    </div>
                    </div>
                </div>
                </div>
                </div>

            </section>
        </Fragment>
    )
}

export default Education;