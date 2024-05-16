// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconUserPlus
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconUserPlus
   
    
};
const StudnetCertificates = {
    id: 'Students Certificates',
    title: <FormattedMessage id="Students Certificates" />,
    icon: icons.IconUserPlus,
    type: 'group',
    url: '/viewStudentCertificates'
};

export default StudnetCertificates;
