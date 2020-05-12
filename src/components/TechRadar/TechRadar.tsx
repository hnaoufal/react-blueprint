import React, { useEffect } from 'react';
import styles from './TechRadar.module.css';
import { radar_visualization } from './radar';
// import { config } from './config';


export const TechRadar = ({ config, entries }: any) => {

  useEffect(() => {
    if (entries.length > 0 && config.svg_id === 'radar') {
      let temp = { ...config, entries };
      console.log({ ...config, entries })
      console.log('isExt: ', Object.isExtensible(temp))
      radar_visualization({ ...temp });
    }
  }, [config, entries]);

  // useEffect(() => {
  //   if (config.svg_id === 'radar') {
  //     console.log({ ...config })
  //     radar_visualization({ ...config });
  //   }
  // }, [config, entries]);


  return <div className={styles.techRadar}>
    <svg id="radar"></svg>
  </div>
};