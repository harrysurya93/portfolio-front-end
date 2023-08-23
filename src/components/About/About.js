import React, {Fragment} from 'react';
import PieChart from './PieChart';

const About = () => {
    
    const skillsProgramming = [
    {name: 'C#', type: 'Programming Language'},
    {name: 'JavaScript', type: 'Programming Language'},
    {name: 'HTML', type: 'Programming Language'},
    {name: 'CSS', type: 'Programming Language'},
    {name: 'Visual Basic', type: 'Programming Language'}];
    
    const skillsFramework = [{name: 'ASP.NET MVC', type: 'Framework'},
    {name: 'ASP.NET', type: 'Framework'},
    {name: 'ASP.NET Core', type: 'Framework'},
    {name: 'Entity Framework', type: 'Framework'}];
    
    const skillsLibrary = [{name: 'React', type: 'Library'},
    {name: 'Redux', type: 'Library'},
    {name: 'Bootstrap', type: 'Library'},
    {name: 'Axios.js', type: 'Library'},
    {name: 'Chart.js', type: 'Library'},
    {name: 'Autocomplete.js', type: 'Library'}];

    const skillsCloudComputing = [{name: 'Amazon', type: 'Cloud Computing'},
    {name: 'Azure', type: 'Cloud Computing'}];

    const skillsDatabase = [{name: 'SQL', type: 'Database'},
    {name: 'MySQL', type: 'Database'},
    {name: 'SAP HANA', type: 'Database'},
    {name: 'MongoDB', type: 'Database'}];
    
    const skillsApplication = [{name: 'Visual Studio', type: 'Application'},
    {name: 'Visual Studio Code', type: 'Application'},
    {name: 'GitHub', type: 'Application'},
    {name: 'Postman', type: 'Application'},
    {name: 'Power BI', type: 'Application'}];

    const skillsOthers = [{name: 'Object Oriented Programming', type: 'Others'},
    {name: 'N-tier Architecture', type: 'Others'},
    {name: 'Clean Architecture', type: 'Others'},
    {name: 'Kanban', type: 'Others'},
    {name: 'Agile', type: 'Others'}];

    return (
        <Fragment>
            <section className='m-0 px-0 py-5 bg-secondary-subtle' id='scrollSpyAbout'>
                <div className='container px-5'>
                    <p className='display-5 py-2'>About Me</p>
                    <div className='row m-0 p-0'>
                        <div className='col-xl-7 col-lg-6 col-md-12 col-sm-12 p-0'>
                            <p className='lead'>
                                Passionate Full Stack Developer with five years of experience creating front-end and back-end websites to enhance companies' workflow and business decisions. Succeeded in implementing web solutions in several projects ranging from small to middle-sized companies, varying from manufacturer and retail.                         
                            </p>
                            <p className='lead'>
                                Proven hands-on experience in gathering requirements, designing concepts, developing testable code, and delivering websites that hundreds of users use. Deep understanding of concepts of Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Warehouse Management Systems (WMS). Skilled in providing technical mentorship to improve code quality, reliability, and security.
                            </p>
                                
                                <ul>
                                    <li className='list-item mb-0'>Programming Languages</li>
                                    {skillsProgramming.map(data => 
                                        <span class="badge text-bg-success mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Frameworks</li>
                                    {skillsFramework.map(data => 
                                        <span class="badge text-bg-danger mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Library</li>
                                    {skillsLibrary.map(data => 
                                        <span class="badge text-bg-info mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Cloud Computing</li>
                                    {skillsCloudComputing.map(data => 
                                        <span class="badge text-bg-primary mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Databases</li>
                                    {skillsDatabase.map(data => 
                                        <span class="badge text-bg-dark mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Applications</li>
                                    {skillsApplication.map(data => 
                                        <span class="badge text-bg-warning mx-1">{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Others</li>
                                    {skillsOthers.map(data => 
                                        <span class="badge text-bg-secondary mx-1">{data.name}</span>
                                    )}
                                </ul>
                            </div>
                            <div className='col-xl-5 col-lg-6 col-md-12 col-sm-12 m-0 p-2x'>
                                <PieChart />
                            </div>
                        </div>

                    </div>                
            </section>
        </Fragment>
    )
}

export default About;