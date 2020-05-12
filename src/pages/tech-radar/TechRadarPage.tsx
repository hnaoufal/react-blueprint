import React, { useEffect } from 'react';
import { TechRadar } from '../../components/TechRadar/TechRadar';
import { useSelector, useDispatch } from 'react-redux';
import { getConfig, configObject } from '../../features/config/configSlice';
import { getEntries, entriesList } from '../../features/entries/entriesSlice';

const TechRadarPage = () => {
    const entries = useSelector(entriesList)
    const config = useSelector(configObject)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getConfig());
        dispatch(getEntries());
    }, []);

    return <TechRadar config={config} entries={entries} />
};

export default TechRadarPage;

export const TechRadarRoute = {
    url: '/tech-radar',
    component: TechRadarPage,
}