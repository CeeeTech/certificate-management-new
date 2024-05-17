// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconUsers
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconUsers
   
    
};
const StudnetCertificates = {
    id: 'Students Certificates',
    title: <FormattedMessage id="Students Certificates" />,
    icon: icons.IconUsers,
    type: 'group',
    url: '/viewStudentCertificates'
};

export default StudnetCertificates;
