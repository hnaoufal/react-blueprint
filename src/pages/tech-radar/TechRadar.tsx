import React, { useEffect } from 'react';
import styles from './TechRadar.module.css';
import { radar_visualization } from '../../components/radar';
import { config } from '../../components/config';

const TechRadar = () => {

    useEffect(() => {
        radar_visualization(config);
    }, []);

    return <div className={styles.techRadar}>
        <svg id="radar"></svg>
    </div>
};

export default TechRadar;

export const TechRadarRoute = {
    url: '/tech-radar',
    component: TechRadar,
}