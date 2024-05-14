// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets

import { IconCertificate } from '@tabler/icons-react';

// constant
const icons = {
    IconCertificate
   
    
};
const Certificates = {
    id: 'Certificate',
    title: <FormattedMessage id="Certificates" />,
    icon: icons.IconCertificate,
    type: 'group',
    url: '/viewCertificates'
};

export default Certificates;
