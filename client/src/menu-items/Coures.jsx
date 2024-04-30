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
const Course = {
    id: 'Add New Course',
    title: <FormattedMessage id="Add New Course" />,
    icon: icons.IconUserCheck,
    type: 'group',
    url: '/dashboard/courseform'
};

export default Course;
