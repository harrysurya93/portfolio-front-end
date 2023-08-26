import { v4 as uuidv4 } from 'uuid';
import Experience from '../models/Experience';

const Experience1 = new Experience(uuidv4(), 'Polychemie Asia Pacific Permai','https://www.polychemie.co.id','Head of IT Development','Aug 2019','May 2023');
Experience1.addResponsibility(uuidv4(),'Leading and mentoring a team of 3 web developers to build and maintain the web server and web applications, coordinating project priorities, and providing mentorship to drive team objectives.');
Experience1.addResponsibility(uuidv4(),'Maintaining the Cloud Server cost efficiency by taking necessary action to remove redundancy in the project.');
Experience1.addResponsibility(uuidv4(),'Developing integrated API to the core ERP’s Database to ensure Single Source of Truth is implemented.');
Experience1.addResponsibility(uuidv4(),'Managing the security of implemented website using the latest security solutions.');
Experience1.addResponsibility(uuidv4(),'Combining IT analysis with business processes to create comprehensive strategies to support business decisions.');
Experience1.addResponsibility(uuidv4(),'Archiving all the Agile development processes in the Kanban Board to monitor the progression of projects.');

const Experience2 = new Experience(uuidv4(),'Soltius Indonesia','https://soltius.co.id','Technical Consultant','Aug 2018','Jul 2019');
Experience2.addResponsibility(uuidv4(),'Providing technical support to the existing product by troubleshooting and bug fixing based on the client’s requirement.');
Experience2.addResponsibility(uuidv4(),'Collaborating with team members to implement website solutions that integrated with the ERP.');
Experience2.addResponsibility(uuidv4(),'Creating business validations and approvals in the database ensures that the products delivered align with the client’s business process.');
Experience2.addResponsibility(uuidv4(),'Mentoring and presenting the final product to key users to ensure the UAT and GO-LIVE phases can achieve according to the project timeline.');

const Experiences = [];
Experiences.push(Experience1, Experience2);

export default Experiences;