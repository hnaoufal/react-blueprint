import React from 'react';
import styles from './TechRadar.module.css';
import { UsersTable } from '../../features/users/UsersTable';

const TechRadar = () => <div className={styles.techRadar}>
    <UsersTable />
</div>;

export default TechRadar;

export const TechRadarRoute = {
    url: '/tech-radar',
    component: TechRadar,
}