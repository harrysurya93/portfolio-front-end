import GOLiveDinasira from '../assets/images/GOLiveDinasira.jpg';
import WorkshopSoltius from '../assets/images/WorkshopSoltius.jpg';
import GOLivePolychemie from '../assets/images/GOLivePolychemie.jpg';
import { v4 as uuidv4 } from 'uuid';
import Gallery from '../models/Gallery';

const Gallery1 = new Gallery(uuidv4(), GOLivePolychemie, 'Completion Ceremony','Project consist of 4 team members that implemented ERP solution, several addons, and reporting.','Dec 2018','May 2019');
const Gallery2 = new Gallery(uuidv4(), WorkshopSoltius, 'Workshop','Presenting MRP module as one of the ERP\'s functionality to help existing customer plan the supply chain.','Oct 2018','Oct 2018');
const Gallery3 = new Gallery(uuidv4(), GOLiveDinasira, 'Completion Ceremony','Project consist of 5 team members that implemented ERP solution, several addons, and reporting.','Aug 2018','Nov 2018');


const Galleries = [];
Galleries.push(Gallery1, Gallery2, Gallery3);

export default Galleries;