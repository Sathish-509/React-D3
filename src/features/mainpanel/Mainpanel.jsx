import styles from './Mainpanel.module.css';
import BarChart from '../../utilities/barchart/Barchart';
import React, { useEffect, useState } from 'react';
import DrawChart from '../timelineseries/Timelineseries';
import Importpower from '../importpower/Importpower';
import Exportpower from '../exportpower/Exportpower';
import Temperature from '../temperature/Temperature';
import Humidity from '../humidity/Humidity';
import PhaseComparator from '../phasecomparator/PhaseComparator';
import LineChart from 'utilities/linechart/LineChart';

const datas = [
	[10, 30, 40, 20],
	[10, 40, 30, 20, 50, 10],
	[60, 30, 40, 20, 30]
];

export function Mainpanel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }
    var i = 0;
  return (
    <div className={styles.mainPanelContainer}>
        <div>
        {/* <button onClick={changeData}>Change Data</button>

        <BarChart width={600} height={400} data={datas} /> */}
        {/* <DrawChart></DrawChart> */}
        <div className={styles.container}>
          <div>
            <Exportpower></Exportpower>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.fleft}>
            <BarChart></BarChart>
          </div>
          <div className={styles.fright}>
            <BarChart></BarChart>
          </div>
        </div>
        <div>
          <PhaseComparator></PhaseComparator>
        </div>
        <div className={styles.container}>
          {/* <div className={styles.fleft}>
            <LineChart></LineChart>
          </div> */}
          <div className={styles.fright}>
            <BarChart></BarChart>
          </div>
        </div>
        </div>
    </div>
  );
}
