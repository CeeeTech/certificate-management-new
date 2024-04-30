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
const Batch = {
    id: 'Add New Batch',
    title: <FormattedMessage id="Add New Batch" />,
    icon: icons.IconUserCheck,
    type: 'group',
    url: '/dashboard/batchform'
};

export default Batch;
