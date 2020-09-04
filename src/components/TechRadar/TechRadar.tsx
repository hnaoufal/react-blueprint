import React, { useEffect } from 'react';
import styles from './TechRadar.module.css';
import { radar_visualization } from './radar';


export const TechRadar = ({ config }: any) => {

  useEffect(() => {
    if (config.svg_id && config.entries.length > 0) {
      radar_visualization(config);
    }
  }, [config]);

  return <div className={styles.techRadar}>
    <svg id={config.svg_id}></svg>
  </div>
};