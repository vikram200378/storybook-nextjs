
import React from 'react';
import styles from './Alert.module.css';
import { AlertContainer } from '@salesforce/design-system-react';
import { Icon, Alert } from '@salesforce/design-system-react/components';

// interface AlertProps {
//     variant: 'error' | 'success' | 'warning' | 'info';
//     children: React.ReactNode;
// }



const Alertlib: React.FC = () => {
    return <div >
        <AlertContainer>
            <Alert
                icon={<Icon category="utility" name="user" />}
                labels={{
                    heading: 'Logged in as John Smith (johnsmith@acme.com).',
                    headingLink: 'Log out',
                }}
            />
        </AlertContainer>
    </div>;
};

export default Alertlib;
