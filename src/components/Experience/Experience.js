import React, { Fragment, useState } from 'react';

const Experience = () => {

    const [isColumn, setIsColumn] = useState(true);
    const styleLayoutColumn = {
      flexDirection: isColumn ? 'column' : 'row',
    };

    return (
        <Fragment>
            <section className='px-4 py-5 bg-white' id='scrollSpyExperience' >
                <div className='container mx-auto'>
                    <p className='display-5 py-2 mx-0 mb-3'>Work Experience</p>
                    <div class="accordion " id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            <p className='mb-0'><i class="bi bi-buildings-fill"></i> <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='https://polychemie.co.id'>Polychemie Asia Pacific Permai</a> - <span className='text-muted fst-italic'>Head of IT Development</span><br/> Aug 2019 - May 2023</p>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <ul>
                                    <li className='lead'>Leading and mentoring a team of 3 web developers to build and maintain the web server and web applications, coordinating project priorities, and providing mentorship to drive team objectives.</li>
                                    <li className='lead'>Maintaining the Cloud Server cost efficiency by taking necessary action to remove redundancy in the project.</li>
                                    <li className='lead'>Developing integrated API to the core ERP’s Database to ensure Single Source of Truth is implemented.</li>
                                    <li className='lead'>Managing the security of implemented website using the latest security solutions.</li>
                                    <li className='lead'>Combining IT analysis with business processes to create comprehensive strategies to support business decisions.</li>
                                    <li className='lead'>Archiving all the Agile development processes in the Kanban Board to monitor the progression of projects.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <p className='mb-0'><i class="bi bi-buildings-fill"></i> <a className='link-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover' href='https://soltius.co.id'>Soltius Indonesia</a> - <span className='text-muted fst-italic'>Technical Consultant</span><br/> Aug 2018 - Jul 2019</p>
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                            <ul>
                                    <li className='lead'>Providing technical support to the existing product by troubleshooting and bug fixing based on the client’s requirement.</li>
                                    <li className='lead'>Collaborating with team members to implement website solutions that integrated with the ERP.</li>
                                    <li className='lead'>Creating business validations and approvals in the database ensures that the products delivered align with the client’s business process.</li>
                                    <li className='lead'>Mentoring and presenting the final product to key users to ensure the UAT and GO-LIVE phases can achieve according to the project timeline.</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                        </div>
            </section>
        </Fragment>
    )
}

export default Experience;