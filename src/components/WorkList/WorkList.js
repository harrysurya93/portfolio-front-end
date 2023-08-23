import React, { Fragment } from 'react';

const Work = () => {

    const projects = [
    {company:'Self-Made', name: 'Portfolio', description: 'Web application that displays personal information for work purpose and showcase of skills.', techs: ['React','.NET Core','JavaScript','HTML','CSS','axios.js','datatables.js']},
    {company:'Polychemie Asia Pacific Permai', name: 'Customer Relationship Management', description: 'Web application to manage sales task such as activity recording, complaint management, sales forecasting, reporting.', techs: ['C#','ASP.NET MVC','JavaScript','HTML','CSS','SAP HANA','ADO.NET','DI API','axios.js','datatables.js','autocomplete.js']},
    {company: 'Polychemie Asia Pacific Permai', name: 'Warehouse Management System', description:'Web Application to handle inventory movement based on item master data, bin location, and warehouse using QR Code scanning.', techs: ['Visual Basic','ASP.NET','JavaScript','HTML','CSS','SAP HANA','DI API']},
    {company:'Polychemie Asia Pacific Permai', name: 'Vendor Portal', description: 'Web Application for vendors inputting new A/P invoices request based on Goods Receipt to achieve paperless in financing department', techs: ['C#','ASP.NET MVC','JavaScript','HTML','CSS','SAP HANA','ADO.NET','DI API','axios.js']},
    {company:'Planet Mainan Indonesia', name: 'E-Commerce', description: 'Web Application for b2b business to display products catalog with advanced filter, pricing, and sales order generation.', techs: ['C#','ASP.NET MVC','JavaScript','HTML','CSS','SAP HANA','ADO.NET','DI API','axios.js']},
    {company:'Planet Toys', name: 'Point of Sale', description: 'Web Application for retail department that handle daily transaction, inventory movement, and invoicing', techs: ['C#','ASP.NET MVC','JavaScript','HTML','CSS','SAP HANA','ADO.NET','DI API','axios.js']},
    {company:'Soltius Indonesia', name: 'Production Addons', description: 'Desktop Application for inputting all production process in textile industry that mapping all the detailed processes in every batch of productions.', techs: ['Visual Basic','.NET','DI API','SQL Server']},
    {company:'Soltius Indonesia', name: 'Scale Machine Integration', description: 'Desktop Application to integrate scale machine which lock data entry based on output of scale machine that transferred by RS 232 port.', techs: ['Visual Basic','.NET','DI API','SQL Server']},
    {company:'Soltius Indonesia', name: 'MRP Prototype', description: 'Web Application to process all the data of forecast, stockage, and purchases. Deliver results based on formula to display order recommendation for raw material and finished goods.', techs: ['Visual Basic','.NET','DI API','SQL Server']}];

    return (
        <Fragment>
            <section className='px-4 py-5 bg-white' id='scrollSpyWork' style={{minHeight:`50vh`}}>
            <p className='display-5 my-2 mx-0'>Previous Work</p>
            <div className='row m-0'>
                {projects.map(project => 
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 m-0 p-0 mx-auto'>
                        <div class="card rounded-0 border-1 bg-white border-light-subtle" style={{minHeight:300}}>
                            <div class="card-body">
                                <p class="card-title h5 mb-1"><i class="bi bi-window"></i> {project.name}</p>
                                <p class="card-title text-muted h8 mb-2"><i class="bi bi-buildings-fill"></i> {project.company}</p>
                                <p class="card-text fs-6 my-3">{project.description}</p>
                                {project.techs.map(tech => 
                                    <span class="badge text-bg-dark mx-1">{tech}</span>
                                )}
                            </div>
                        </div>
                    </div>
                )}                                
            </div>
            </section>
        </Fragment>
    )
}

export default Work;