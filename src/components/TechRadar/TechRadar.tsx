import React, { useEffect } from 'react';
import styles from './TechRadar.module.css';
import { radar_visualization } from './radar';
import { config } from './config';


export const TechRadar = ({ entries }: any) => {

  useEffect(() => {
    // if (entries.length > 0 && config.svg_id === 'radar') {
    // console.log({ ...config, entries })
    // radar_visualization({ ...config, entries });
    console.log(config);
    radar_visualization(config);
    // }
  }, []);

  // }, [config, entries]);

  return <div className={styles.techRadar}>
    <svg id="radar"></svg>
  </div>
};