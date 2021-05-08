import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    incrementAsync,
    selectExportPowerList
  } from './exportPowerSlice';
import LineChart from '../../utilities/linechart/LineChart';

export default function Exportpower() {
    const CountsByDate = useAppSelector(selectExportPowerList);
    const dispatch = useAppDispatch();
    dispatch(incrementAsync());
    return(
        <LineChart CountsByDate={CountsByDate}></LineChart>
    );
}
