import { v4 as uuidv4 } from 'uuid';
import Skill from '../models/Skill';

const Skill1 = new Skill(uuidv4(),'Programming Languages','#a9bcff');
Skill1.addDetail(uuidv4(),'C#');
Skill1.addDetail(uuidv4(),'JavaScript (ES6+)');
Skill1.addDetail(uuidv4(),'HTML');
Skill1.addDetail(uuidv4(),'CSS');
Skill1.addDetail(uuidv4(),'Visual Basic');
const Skill2 = new Skill(uuidv4(),'Frameworks','#9affff');
Skill2.addDetail(uuidv4(), 'ASP.NET MVC');
Skill2.addDetail(uuidv4(), 'ASP.NET');
Skill2.addDetail(uuidv4(), 'ASP.NET Core');
Skill2.addDetail(uuidv4(), 'Entity Framework');
const Skill3 = new Skill(uuidv4(),'Libraries','#18ffb1');
Skill3.addDetail(uuidv4(),'React');
Skill3.addDetail(uuidv4(),'Redux');
Skill3.addDetail(uuidv4(),'Bootstrap');
Skill3.addDetail(uuidv4(),'axios.js');
Skill3.addDetail(uuidv4(),'Chart.js');
Skill3.addDetail(uuidv4(),'autoComplete.js');
const Skill4 = new Skill(uuidv4(),'Cloud Computing','#ffffad');
Skill4.addDetail(uuidv4(),'Amazon');
Skill4.addDetail(uuidv4(),'Azure');
const Skill5 = new Skill(uuidv4(),'Databases','#ffd493');
Skill5.addDetail(uuidv4(),'SQL');
Skill5.addDetail(uuidv4(),'MySQL');
Skill5.addDetail(uuidv4(),'SAP HANA');
Skill5.addDetail(uuidv4(),'MongoDB');
const Skill6 = new Skill(uuidv4(),'Applications','#ff9f8c');
Skill6.addDetail(uuidv4(),'Visual Studio');
Skill6.addDetail(uuidv4(),'Visual Studio Code');
Skill6.addDetail(uuidv4(),'GitHub');
Skill6.addDetail(uuidv4(),'Postman');
Skill6.addDetail(uuidv4(),'Power BI');
const Skill7 = new Skill(uuidv4(),'Others','#ffbdda');
Skill7.addDetail(uuidv4(),'Object Oriented Programming');
Skill7.addDetail(uuidv4(),'N-tier Architecture');
Skill7.addDetail(uuidv4(),'Clean Architecture');
Skill7.addDetail(uuidv4(),'Kanban');
Skill7.addDetail(uuidv4(),'Agile');

const Skills = [];
Skills.push(Skill1,Skill2,Skill3,Skill4,Skill5,Skill6,Skill7);

export default Skills;