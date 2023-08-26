import { v4 as uuidv4 } from 'uuid';
import Education from '../models/Education';
import LogoBinus from '../assets/images/LogoBinus.png';
import LogoMikroskil from '../assets/images/LogoMikroskil.png';

const Education1 = new Education(uuidv4(),LogoBinus,'https://binus.ac.id','Computer Science','Master\'s Degree','Binus Logo', 3.90, 2020, 2022);
Education1.addPublication(uuidv4(),'http://www.jatit.org/volumes/Vol100No9/33Vol100No9.pdf');

const Education2 = new Education(uuidv4(), LogoMikroskil,'https://mikroskil.ac.id','Computer Engineering','Bachelor\'s Degree', 'Mikroskil Logo',3.03,2012,2018);

const Educations = [];
Educations.push(Education1, Education2);

export default Educations;