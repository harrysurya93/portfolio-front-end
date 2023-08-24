import React, { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Work = (props) => {

    const projects = [
    {id: uuidv4(), company:'Self-Made', name: 'Portfolio', description: 'Web application that displays personal information for work purpose and showcase of skills.', techs: [{id: uuidv4(), name:'React'},{id: uuidv4(),name:'.NET Core'},{id:uuidv4(),name:'JavaScript'},{id:uuidv4(),name:'HTML'},{id:uuidv4(),name:'CSS'},{id:uuidv4(),name:'axios.js'},{id:uuidv4(),name:'datatables.js'}]},
    {id: uuidv4(),company:'Polychemie Asia Pacific Permai', name: 'Customer Relationship Management', description: 'Web application to manage sales task such as activity recording, complaint management, sales forecasting, reporting.', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'},{id: uuidv4(),name:'datatables.js'},{id: uuidv4(),name:'autocomplete.js'}]},
    {id: uuidv4(),company: 'Polychemie Asia Pacific Permai', name: 'Warehouse Management System', description:'Web Application to handle inventory movement based on item master data, bin location, and warehouse using QR Code scanning.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'ASP.NET'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'DI API'}]},
    {id: uuidv4(),company:'Polychemie Asia Pacific Permai', name: 'Vendor Portal', description: 'Web Application for vendors inputting new A/P invoices request based on Goods Receipt to achieve paperless in financing department', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'}]},
    {id: uuidv4(),company:'Planet Mainan Indonesia', name: 'E-Commerce', description: 'Web Application for b2b business to display products catalog with advanced filter, pricing, and sales order generation.', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'}]},
    {id: uuidv4(),company:'Planet Toys', name: 'Point of Sale', description: 'Web Application for retail department that handle daily transaction, inventory movement, and invoicing', techs: [{id: uuidv4(),name:'C#'},{id: uuidv4(),name:'ASP.NET MVC'},{id: uuidv4(),name:'JavaScript'},{id: uuidv4(),name:'HTML'},{id: uuidv4(),name:'CSS'},{id: uuidv4(),name:'SAP HANA'},{id: uuidv4(),name:'ADO.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'axios.js'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'Production Addons', description: 'Desktop Application for inputting all production process in textile industry that mapping all the detailed processes in every batch of productions.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'Scale Machine Integration', description: 'Desktop Application to integrate scale machine which lock data entry based on output of scale machine that transferred by RS 232 port.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]},
    {id: uuidv4(),company:'Soltius Indonesia', name: 'MRP Prototype', description: 'Web Application to process all the data of forecast, stockage, and purchases. Deliver results based on formula to display order recommendation for raw material and finished goods.', techs: [{id: uuidv4(),name:'Visual Basic'},{id: uuidv4(),name:'.NET'},{id: uuidv4(),name:'DI API'},{id: uuidv4(),name:'SQL Server'}]}];

    return (
        <Fragment>
            <section className='px-4 py-5 bg-light' id='scrollSpyWork'>
            <div className='container'>
                <p className='display-5 my-2 mx-0'>Previous Work</p>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    {projects.map(project => 
                        <div key={project.id} className='col'>
                            <div className='card bg-white border-light-subtle h-100'>
                                <div className='card-body'>
                                    <p className='card-title h5 mb-1'><i className='bi bi-window'></i> {project.name}</p>
                                    <p className='card-title text-muted h8 mb-2'><i className='bi bi-buildings-fill'></i> {project.company}</p>
                                    <p className='card-text fs-6 my-3'>{project.description}</p>
                                    {project.techs.map(tech => 
                                        <span key={tech.id} className='badge text-bg-dark mx-1'>{tech.name}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}                                
                </div>
            </div>

            </section>
        </Fragment>
    )
}

export default Work;