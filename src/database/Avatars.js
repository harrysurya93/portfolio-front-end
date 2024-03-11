import { v4 as uuidv4 } from 'uuid';
import Avatar1 from '../assets/images/avatar1.png';
import Avatar2 from '../assets/images/avatar2.png';
import Avatar3 from '../assets/images/Harry_Casual.png';
import Avatar from '../models/Avatar';

//const tempAvatar1 = new Avatar(uuidv4(), Avatar1, 'avatar1');
//const tempAvatar2 = new Avatar(uuidv4(), Avatar2, 'avatar2');
const tempAvatar3 = new Avatar(uuidv4(), Avatar3, 'Richmond Temple Casual');

const Avatars = [];
Avatars.push(tempAvatar3);

export default Avatars;