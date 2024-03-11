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

const Experience3 = new Experience(uuidv4(), 'FreshPoint', 'https://www.freshpoint.com/', 'Order Selector', 'Nov 2023','Present');
Experience3.addResponsibility(uuidv4(),'Accurately pick orders as per the picking list instructions, ensuring the correct variety, size, and quality of produce is selected.');
Experience3.addResponsibility(uuidv4(),'Complete paperwork or electronic records related to order picking, inventory levels, and quality checks.');
Experience3.addResponsibility(uuidv4(),'Assist in inventory counts and stock rotation to ensure freshness and reduce waste.');
Experience3.addResponsibility(uuidv4(),'Operate warehouse equipment, such as pallet jacks and forklifts, to safely move large orders or heavy items for the load and unload process.');

const Experiences = [];
Experiences.push(Experience1, Experience2, Experience3);

export default Experiences;