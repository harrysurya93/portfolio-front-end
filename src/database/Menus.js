import { v4 as uuidv4 } from 'uuid';
import Menu from '../models/Menu';
import Resume from '../assets/documents/Resume.pdf';

const Menu1 = new Menu(uuidv4(),'Introduction','bi bi-diamond-fill','sectionIntroduction','#sectionIntroduction','');
const Menu2 = new Menu(uuidv4(),'About','bi bi-file-person-fill','sectionAbout','#sectionAbout','');
const Menu3 = new Menu(uuidv4(),'Experience','bi bi-briefcase-fill','sectionExperience','#sectionExperience','');
const Menu4 = new Menu(uuidv4(),'Education','bi bi-mortarboard-fill','sectionEducation','#sectionEducation','');
const Menu5 = new Menu(uuidv4(),'Project','bi bi-code-slash','sectionWork','#sectionWork','');
const Menu6 = new Menu(uuidv4(),'Gallery','bi bi-images','sectionGallery','#sectionGallery','');
const Menu7 = new Menu(uuidv4(),'Contact','bi bi-envelope','sectionContact','#sectionContact','');
const Menu8 = new Menu(uuidv4(),'Resume','bi bi-filetype-pdf', 'Resume', Resume ,'_blank');

const Menus = [];
Menus.push(Menu1, Menu2, Menu3, Menu4, Menu5, Menu6, Menu7, Menu8);

export default Menus;