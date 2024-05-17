// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets

import { IconUserPlus } from '@tabler/icons-react';

// constant
const icons = {
    IconUserPlus
   
    
};
const Certificates = {
    id: 'user',
    title: <FormattedMessage id="Add User" />,
    icon: icons.IconUserPlus,
    type: 'group',
    url: '/adduser'
};

export default Certificates;
