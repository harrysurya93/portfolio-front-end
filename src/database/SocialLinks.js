import { v4 as uuidv4 } from 'uuid';
import SocialLink from '../models/SocialLink';

const SocialLink1 = new SocialLink(uuidv4(),'https://www.linkedin.com/in/harry-surya/', 'bi bi-linkedin');
const SocialLink2 = new SocialLink(uuidv4(),'https://github.com/harrysurya93', 'bi bi-github');
const SocialLink3 = new SocialLink(uuidv4(),'https://www.instagram.com/harrysurya93/', 'bi bi-instagram');
const SocialLink4 = new SocialLink(uuidv4(),'https://www.facebook.com/profile.php?id=100092739357301', 'bi bi-facebook');
const SocialLink5 = new SocialLink(uuidv4(),'mailto:harrysurya93@gmail.com', 'bi bi-envelope-at-fill');

const SocialLinks = [];
SocialLinks.push(SocialLink1, SocialLink2, SocialLink3, SocialLink4, SocialLink5);

export default SocialLinks;