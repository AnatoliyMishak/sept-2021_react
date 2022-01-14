import React from 'react';

const Launch = (props) => {
    const {mission_name, launch_year, img} = props;

    return (
        <div className={'flights'}>

            <div className={'info'}>
            {mission_name} -- {launch_year}

            </div>
            <div>
                <img src={img} alt={'pic'}/>
            </div>
        </div>
    );
};

export default Launch;