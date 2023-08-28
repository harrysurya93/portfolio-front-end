import { v4 as uuidv4 } from 'uuid';
import Project from '../models/Project';

const Project1 = new Project(uuidv4(),'Personal','Portfolio','Website that displays personal information to showcase skills and experiences for career development and personal branding.');
Project1.addTech(uuidv4(),'React');
Project1.addTech(uuidv4(),'Bootstrap');
Project1.addTech(uuidv4(),'JavaScript (ES6+)');
Project1.addTech(uuidv4(),'HTML');
Project1.addTech(uuidv4(),'CSS');
Project1.addTech(uuidv4(),'chart.js');
Project1.addTech(uuidv4(),'AWS Amplify');

const Project2 = new Project(uuidv4(),'BINUS University','IoT + Denoise','Web application that synced with IoT device that tracks body mass index and combines with Denoise methodology to collect daily data of factory workers.');
Project2.addTech(uuidv4(),'C#');
Project2.addTech(uuidv4(),'ASP.NET MVC');
Project2.addTech(uuidv4(),'JavaScript');
Project2.addTech(uuidv4(),'HTML');
Project2.addTech(uuidv4(),'CSS');
Project2.addTech(uuidv4(),'SAP HANA');
Project2.addTech(uuidv4(),'ADO.NET');
Project2.addTech(uuidv4(),'DI API');
Project2.addTech(uuidv4(),'axios.js');
Project2.addTech(uuidv4(),'datatables.js');
Project2.addTech(uuidv4(),'AWS EC2');

const Project3 = new Project(uuidv4(),'Polychemie Asia Pacific Permai','Customer Relationship Management (CRM)','Web application to manage sales tasks such as activity recording, complaint management, sales forecasting, and reporting.');
Project3.addTech(uuidv4(),'C#');
Project3.addTech(uuidv4(),'ASP.NET MVC');
Project3.addTech(uuidv4(),'JavaScript');
Project3.addTech(uuidv4(),'HTML');
Project3.addTech(uuidv4(),'CSS');
Project3.addTech(uuidv4(),'SAP HANA');
Project3.addTech(uuidv4(),'ADO.NET');
Project3.addTech(uuidv4(),'DI API');
Project3.addTech(uuidv4(),'axios.js');
Project3.addTech(uuidv4(),'datatables.js');
Project3.addTech(uuidv4(),'autoComplete.js');
Project3.addTech(uuidv4(),'AWS EC2');

const Project4 = new Project(uuidv4(),'Polychemie Asia Pacific Permai','Warehouse Management System (WMS)','Web application to handle inventory movement based on item master data, bin location, and warehouse using QR Code scanning.');
Project4.addTech(uuidv4(),'Visual Basic');
Project4.addTech(uuidv4(),'ASP.NET');
Project4.addTech(uuidv4(),'JavaScript');
Project4.addTech(uuidv4(),'HTML');
Project4.addTech(uuidv4(),'CSS');
Project4.addTech(uuidv4(),'SAP HANA');
Project4.addTech(uuidv4(),'DI API');
Project4.addTech(uuidv4(),'AWS EC2');

const Project5 = new Project(uuidv4(),'Polychemie Asia Pacific Permai','Vendor Portal','Web application for vendors inputting new A/P invoices requests based on Goods Receipt to achieve paperless in financing department.');
Project5.addTech(uuidv4(),'C#');
Project5.addTech(uuidv4(),'ASP.NET MVC');
Project5.addTech(uuidv4(),'JavaScript');
Project5.addTech(uuidv4(),'HTML');
Project5.addTech(uuidv4(),'CSS');
Project5.addTech(uuidv4(),'SAP HANA');
Project5.addTech(uuidv4(),'ADO.NET');
Project5.addTech(uuidv4(),'DI API');
Project5.addTech(uuidv4(),'axios.js');
Project5.addTech(uuidv4(),'AWS EC2');

const Project6 = new Project(uuidv4(),'Planet Mainan Indonesia','E-Commerce','Web application for B2B business to display products catalogue with advanced filter, pricing, and sales order generation.');
Project6.addTech(uuidv4(),'C#');
Project6.addTech(uuidv4(),'ASP.NET MVC');
Project6.addTech(uuidv4(),'JavaScript');
Project6.addTech(uuidv4(),'HTML');
Project6.addTech(uuidv4(),'CSS');
Project6.addTech(uuidv4(),'SAP HANA');
Project6.addTech(uuidv4(),'ADO.NET');
Project6.addTech(uuidv4(),'DI API');
Project6.addTech(uuidv4(),'axios.js');
Project6.addTech(uuidv4(),'AWS EC2');

const Project7 = new Project(uuidv4(),'Planet Toys','Point of Sale (POS)','Web application for retail department that handles daily transaction, inventory movement, and invoicing');
Project7.addTech(uuidv4(),'C#');
Project7.addTech(uuidv4(),'ASP.NET MVC');
Project7.addTech(uuidv4(),'JavaScript');
Project7.addTech(uuidv4(),'HTML');
Project7.addTech(uuidv4(),'CSS');
Project7.addTech(uuidv4(),'SAP HANA');
Project7.addTech(uuidv4(),'ADO.NET');
Project7.addTech(uuidv4(),'DI API');
Project7.addTech(uuidv4(),'axios.js');
Project7.addTech(uuidv4(),'AWS EC2');

const Project8 = new Project(uuidv4(),'Soltius Indonesia','Production Order','Desktop application for inputting all production process in textile industry that maps all the detailed processes in every batch of productions.');
Project8.addTech(uuidv4(),'Visual Basic');
Project8.addTech(uuidv4(),'.NET');
Project8.addTech(uuidv4(),'DI API');
Project8.addTech(uuidv4(),'SQL Server');

const Project9 = new Project(uuidv4(),'Soltius Indonesia','Scale Machine Integration','Desktop application to integrate scale machine which lock data entry based on output of scale machine that transferred by RS 232 port.');
Project9.addTech(uuidv4(),'Visual Basic');
Project9.addTech(uuidv4(),'.NET');
Project9.addTech(uuidv4(),'DI API');
Project9.addTech(uuidv4(),'SQL Server');

const Project10 = new Project(uuidv4(),'Soltius Indonesia','MRP Prototype','Web application to process all the forecast data, inventory stock, and purchases. Deliver results based on formulas to display order recommendations for raw materials and finished goods.');
Project10.addTech(uuidv4(),'C#');
Project10.addTech(uuidv4(),'.NET');
Project10.addTech(uuidv4(),'DI API');
Project10.addTech(uuidv4(),'SQL Server');

const Projects = [];
Projects.push(Project1, Project2, Project3, Project4, Project5, Project6, Project7, Project8, Project9, Project10);

export default Projects;