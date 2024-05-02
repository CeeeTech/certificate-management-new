// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconAntennaBars5
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconAntennaBars5,
   
    
};
const Batch = {
    id: 'Add New Batch',
    title: <FormattedMessage id="Add New Batch" />,
    icon: icons.IconAntennaBars5,
    type: 'group',
    url: '/dashboard/batchform'
};

export default Batch;
