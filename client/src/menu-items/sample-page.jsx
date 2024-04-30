// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconUserCheck
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconUserCheck,
   
    
};
const samplePage = {
    id: 'Add New Student',
    title: <FormattedMessage id="Add New Student" />,
    icon: icons.IconUserCheck,
    type: 'group',
    url: '/dashboard/studentform'
};

export default samplePage;
