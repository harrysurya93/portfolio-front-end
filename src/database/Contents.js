import { v4 as uuidv4 } from 'uuid';
import { ContentAbout, ContentIntroduction, ContentContact } from '../models/Content';

const contentAbout = new ContentAbout('About Me');
contentAbout.addParagraph(uuidv4(),<>Passionate Full Stack Developer with <mark>five years of experience developing front-end and back-end</mark> websites to enhance companies' workflow and business decisions. Succeeded in implementing web solutions in several projects ranging from small to middle-sized companies, varying from manufacturer and retail.</> )
contentAbout.addParagraph(uuidv4(),<>Proven <mark>hands-on experience in gathering requirements, designing concepts, developing testable code, and delivering</mark> websites that hundreds of users use. Deep understanding of concepts of Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Warehouse Management Systems (WMS). Skilled in providing technical mentorship to improve code quality, reliability, and security.</>)

const contentIntroduction = new ContentIntroduction('Hello World, my name is','Harry Surya','Full-Stack Developer','Experienced for 5 years in developing web application for various projects across industries.','https://goo.gl/maps/RqFsQb1WF2reuUhk9','Vancouver, BC, Canada 🇨🇦','About Me','#sectionAbout')

const contentContact = new ContentContact('"Let\'s Connect and Build Together!"', 'Sincerely','Harry Surya','mailto:harrysurya93@gmail.com','Send Email','bi bi-envelope-at-fill');
contentContact.addParagraph(uuidv4(),'Are you seeking for versatile and skilled full-stack developer to join your team? Look no further! I\'m actively seeking exciting opportunities to contribute my expertise and passion for crafting exceptional digital experiences.');
contentContact.addParagraph(uuidv4(),'If you\'re interested in collaborating on innovative projects, discussing potential job opportunities, or simply want to connect and share ideas, I would love to hear from you. Feel free to reach out with me on [LinkedIn/GitHub/Email]. Let\'s create something amazing together!');
contentContact.addParagraph(uuidv4(),'Looking forward to the possibility of working with you.');

export { contentAbout, contentIntroduction, contentContact };