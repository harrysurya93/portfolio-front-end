import React, {Fragment} from 'react';
import PieChart from './PieChart';
import { v4 as uuidv4 } from 'uuid';

const About = (props) => {
    
    const skillsProgramming = [
    {id: uuidv4() ,name: 'C#', type: 'Programming Language'},
    {id: uuidv4() ,name: 'JavaScript', type: 'Programming Language'},
    {id: uuidv4() ,name: 'HTML', type: 'Programming Language'},
    {id: uuidv4() ,name: 'CSS', type: 'Programming Language'},
    {id: uuidv4() ,name: 'Visual Basic', type: 'Programming Language'}];
    
    const skillsFramework = [
    {id: uuidv4() ,name: 'ASP.NET MVC', type: 'Framework'},
    {id: uuidv4() ,name: 'ASP.NET', type: 'Framework'},
    {id: uuidv4() ,name: 'ASP.NET Core', type: 'Framework'},
    {id: uuidv4() ,name: 'Entity Framework', type: 'Framework'}];
    
    const skillsLibrary = [
    {id: uuidv4() ,name: 'React', type: 'Library'},
    {id: uuidv4() ,name: 'Redux', type: 'Library'},
    {id: uuidv4() ,name: 'Bootstrap', type: 'Library'},
    {id: uuidv4() ,name: 'Axios.js', type: 'Library'},
    {id: uuidv4() ,name: 'Chart.js', type: 'Library'},
    {id: uuidv4() ,name: 'Autocomplete.js', type: 'Library'}];

    const skillsCloudComputing = [
    {id: uuidv4() ,name: 'Amazon', type: 'Cloud Computing'},
    {id: uuidv4() ,name: 'Azure', type: 'Cloud Computing'}];

    const skillsDatabase = [
    {id: uuidv4() ,name: 'SQL', type: 'Database'},
    {id: uuidv4() ,name: 'MySQL', type: 'Database'},
    {id: uuidv4() ,name: 'SAP HANA', type: 'Database'},
    {id: uuidv4() ,name: 'MongoDB', type: 'Database'}];
    
    const skillsApplication = [
    {id: uuidv4() , name: 'Visual Studio', type: 'Application'},
    {id: uuidv4() ,name: 'Visual Studio Code', type: 'Application'},
    {id: uuidv4() ,name: 'GitHub', type: 'Application'},
    {id: uuidv4() ,name: 'Postman', type: 'Application'},
    {id: uuidv4() ,name: 'Power BI', type: 'Application'}];

    const skillsOthers = [
    {id: uuidv4() ,name: 'Object Oriented Programming', type: 'Other'},
    {id: uuidv4() ,name: 'N-tier Architecture', type: 'Other'},
    {id: uuidv4() ,name: 'Clean Architecture', type: 'Other'},
    {id: uuidv4() ,name: 'Kanban', type: 'Other'},
    {id: uuidv4() ,name: 'Agile', type: 'Other'}];

    return (
        <Fragment>
            <section className='m-0 px-0 py-5 bg-secondary-subtle' id='scrollSpyAbout'>
                <div className='container px-5'>
                    <p className='display-5 py-2'>About Me</p>
                    <div className='row m-0 p-0'>
                        <div className='col-xl-7 col-lg-6 col-md-12 col-sm-12 p-0'>
                            <p className='lead'>
                                Passionate Full Stack Developer with <mark>five years of experience creating front-end and back-end websites</mark> to enhance companies' workflow and business decisions. Succeeded in implementing web solutions in several projects ranging from small to middle-sized companies, varying from manufacturer and retail.                         
                            </p>
                            <p className='lead'>
                                <mark>Proven hands-on experience in gathering requirements, designing concepts, developing testable code, and delivering websites that hundreds of users use</mark>. Deep understanding of concepts of Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Warehouse Management Systems (WMS). Skilled in providing technical mentorship to improve code quality, reliability, and security.
                            </p>
                                
                                <ul>
                                    <li className='list-item mb-0'>Programming Languages</li>
                                    {skillsProgramming.map(data => 
                                        <span key={data.id} className='badge text-bg-success mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Frameworks</li>
                                    {skillsFramework.map(data => 
                                        <span key={data.id} className='badge text-bg-danger mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Library</li>
                                    {skillsLibrary.map(data => 
                                        <span key={data.id} className='badge text-bg-info mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Cloud Computing</li>
                                    {skillsCloudComputing.map(data => 
                                        <span key={data.id} className='badge text-bg-primary mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Databases</li>
                                    {skillsDatabase.map(data => 
                                        <span key={data.id} className='badge text-bg-dark mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Applications</li>
                                    {skillsApplication.map(data => 
                                        <span key={data.id} className='badge text-bg-warning mx-1'>{data.name}</span>
                                    )}

                                    <li className='list-item mb-0'>Others</li>
                                    {skillsOthers.map(data => 
                                        <span key={data.id} className='badge text-bg-secondary mx-1'>{data.name}</span>
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