// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconBooks
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconBooks,
   
    
};
const Course = {
    id: 'Course',
    title: <FormattedMessage id="Course" />,
    icon: icons.IconBooks,
    type: 'group',
    url: '/viewCourse'
};

export default Course;
