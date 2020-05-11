import React from 'react';
import styles from './TechRadar.module.css';

const TechRadar = () => <div className={styles.techRadar}>Tech Radar</div>;

export default TechRadar;

export const TechRadarRoute = {
    url: '/tech-radar',
    component: TechRadar,
}