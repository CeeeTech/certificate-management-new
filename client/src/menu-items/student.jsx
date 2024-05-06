// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconUser
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconUser
   
    
};
const student = {
    id: 'Students',
    title: <FormattedMessage id="Students" />,
    icon: icons.IconUser,
    type: 'group',
    url: '/viewStudent'
};

export default student;
