import dashboard from './dashboard';
import student from './student'

import Batch from './Batch';
import Course from './Coures';
import Certificates from './Certificates';
import AddUser from './addUser';
import StudnetCertificates from './StudnetCertificates';



// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard,  student,Batch, Course, Certificates, AddUser,StudnetCertificates]
};

export default menuItems;
