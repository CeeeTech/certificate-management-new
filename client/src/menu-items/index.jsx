import dashboard from './dashboard';
import student from './student'

import Batch from './Batch';
import Course from './Coures';
import Certificates from './Certificates';
import StudnetCertificates from './StudnetCertificates';



// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard,  student,Batch, Course, Certificates,StudnetCertificates ]
};

export default menuItems;
