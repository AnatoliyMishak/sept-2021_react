import React from 'react';

const Launch = (props) => {
    const {mission_name, launch_year, img} = props;

    return (
        <div>
            {mission_name} -- {launch_year} -- {img}
        </div>
    );
};

export default Launch;