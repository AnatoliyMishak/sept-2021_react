import React from 'react';

import css from './User.module.css'

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={css.wrap}>
            <div>
                {id}_{name}
            </div>
            <button>User Details</button>
        </div>
    );
};

export default User;