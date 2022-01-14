import React from 'react';

import Notebook from "../Notebook/Notebook";

const notebooks = [
    {
        id: 1,
        brand: 'Apple',
        model: 'Pro',
        cost: 100,
        img: 'https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202111300609'
    },
    {
        id: 2,
        brand: 'HP',
        model: '15s',
        cost: 1000,
        img: 'https://www.notebookcheck-ru.com/fileadmin/Notebooks/HP/15s-fq1556ng/HP_15s_fq_teaser.png'
    },
    {
        id: 3,
        brand: 'Dell',
        model: 'Latitude',
        cost: 2000,
        img: 'https://www.notebookcheck-ru.com/uploads/tx_nbc2/DellLatitude7320_2-in-1__1__01.jpg'
    }
]

const Notebooks = () => {
    return (
        <div>
            {notebooks.map(notebook => <Notebook notebook={notebook}/>)};
        </div>
    );
};

export default Notebooks;