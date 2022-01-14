import React from 'react';
import {useEffect, useState} from 'react';
import Launch from '../Launch/Launch'

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(launches => {
                setLaunches(launches.filter(launch => launch.launch_year !=='2020'));
            });
    },[])
    return (
        <div>
            {launches.map(value => <Launch key={value.flight_number}
                                           mission_name={value.mission_name}
                                           launch_year={value.launch_year}
            img={value.links.mission_patch_small} alt="mission_patch"/>)}
        </div>
    );
};

export default Launches;