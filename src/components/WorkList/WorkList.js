import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Work = (props) => {

    const projects = [
    {id: uuidv4(), company:'Personal', name: 'Portfolio', description: 'Web application that displays personal information for work purpose and showcase of skills.', techs: [{id: uuidv4(), name:'React'},{id: uuidv4(),name:'.NET Core'},{id:uuidv4(),name:'JavaScript'},{id:uuidv4(),name:'HTML'},{id:uuidv4(),name:'CSS'},{id:uuidv4(),name:'axios.js'},{id:uuidv4(),name:'datatables.js'},{id: uuidv4(), name:'AWS Amplify'}]},
    {id: uuidv4(),company:'Binus University', name: 'IoT + Denoise', description: 'IoT device that track body mass index and combined with Denoise methodology to collect daily data of factory worker.', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(),name:'datatables.js'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Polychemie Asia Pacific Permai', name: 'CRM', description: 'Web application to manage sales task such as activity recording, complaint management, sales forecasting, reporting.', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(),name:'datatables.js'},{id: uuidv4(),name:'autocomplete.js'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Polychemie Asia Pacific Permai', name: 'WMS', description:'Web Application to handle inventory movement based on item master data, bin location, and warehouse using QR Code scanning.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'ASP.NET'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'DI API'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Polychemie Asia Pacific Permai', name: 'Vendor Portal', description: 'Web Application for vendors inputting new A/P invoices request based on Goods Receipt to achieve paperless in financing department', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Planet Mainan Indonesia', name: 'E-Commerce', description: 'Web Application for b2b business to display products catalog with advanced filter, pricing, and sales order generation.', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Planet Toys', name: 'Point of Sale', description: 'Web Application for retail department that handle daily transaction, inventory movement, and invoicing', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(), name:'AWS EC2'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'Production Order', description: 'Desktop Application for inputting all production process in textile industry that mapping all the detailed processes in every batch of productions.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'Scale Machine Integration', description: 'Desktop Application to integrate scale machine which lock data entry based on output of scale machine that transferred by RS 232 port.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'MRP Prototype', description: 'Web Application to process all the data of forecast, stockage, and purchases. Deliver results based on formula to display order recommendation for raw material and finished goods.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]}];

    return (
        <section className='bg-light py-5' id='scrollSpyWork' onMouseEnter={() => props.handlePointerEvent(4)}>
            <div className='container'>
                <p className='display-5 text-center'>Work Experience</p>
                <div className='row m-0 p-0'>
                    {projects.map(project => 
                        <div key={project.id} className='col-xs-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-1'>
                            <div className='card bg-white border-light-subtle h-100'>
                                <div className='card-body'>
                                    <p className='h5 mb-1'><i className='bi bi-window'></i> {project.name}</p>
                                    <p className='mb-1 text-muted'><i className='bi bi-buildings-fill'></i> {project.company}</p>
                                    <p className='mb-0'>{project.description}</p>
                                    {project.techs.map(tech => 
                                        <span key={tech.id} className='badge text-bg-dark me-1'>{tech.name}</span>
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

export default Work;