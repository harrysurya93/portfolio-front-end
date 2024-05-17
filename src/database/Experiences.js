import { v4 as uuidv4 } from 'uuid';
import Experience from '../models/Experience';

const Experience1 = new Experience(uuidv4(), 'Polychemie Asia Pacific Permai','https://www.polychemie.co.id','Head of IT Development','Aug 2019','May 2023');
Experience1.addResponsibility(uuidv4(),'Directed a trio of developers, streamlining web server/app development and aligning team efforts.');
Experience1.addResponsibility(uuidv4(),'Crafted ERP-integrated software to uphold data accuracy data accuracy and integrity.');
Experience1.addResponsibility(uuidv4(),'Managing the security of implemented web applications using the latest security solutions.');
Experience1.addResponsibility(uuidv4(),'Melded IT insights with business operations for strategic enhancements.');

const Experience2 = new Experience(uuidv4(),'Soltius Indonesia','https://soltius.co.id','Technical Consultant','Aug 2018','Jul 2019');
Experience2.addResponsibility(uuidv4(),'Delivered technical support, resolving bugs and issues as per client needs.');
Experience2.addResponsibility(uuidv4(),'Worked with team members to implement web application solutions that integrated with the ERP.');
Experience2.addResponsibility(uuidv4(),'Designed database validations and approvals, ensuring alignment with client processes.');
Experience2.addResponsibility(uuidv4(),'Presented the final product to key users to ensure the UAT and GO-LIVE phases can be achieved according to the project timeline.');

const Experience3 = new Experience(uuidv4(), 'FreshPoint', 'https://www.freshpoint.com/', 'Production Coordinator', 'Nov 2023','Present');
Experience3.addResponsibility(uuidv4(),'Coordinate production runs with the production supervisor to ensure they are cost-effective and timely.');
Experience3.addResponsibility(uuidv4(),'Develop and manage product labels using VB script to meet customer specifications.');
Experience3.addResponsibility(uuidv4(),'Manage inventory of materials necessary for production, in collaboration with the production manager and purchasing department.');
Experience3.addResponsibility(uuidv4(),'Maintain and update reports on work progress and material consumption using advanced Excel formulas and scripting.');

const Experiences = [];
Experiences.push(Experience3, Experience1, Experience2);

export default Experiences;