// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconBrandAsana
  
} from '@tabler/icons-react';

// constant
const icons = {
    IconBrandAsana,
   
    
};
const Batch = {
    id: 'Batches',
    title: <FormattedMessage id=" Batches" />,
    icon: icons. IconBrandAsana,
    type: 'group',
    url: '/viewBatch'
};

export default Batch;
